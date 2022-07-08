import {data} from './data/data.js'

let dailyFact
let sources = []
sources = data

chrome.runtime.onInstalled.addListener(function () {
	console.clear()
	setFact()
	chrome.alarms.create('update-quote', {periodInMinutes: 1440})
})
chrome.alarms.onAlarm.addListener(function (alarm) {
	if (alarm.name == 'update-quote') {
		setFact()
	}
})
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	switch (message.request) {
		case 'get-shortcuts':
			sendResponse({shortcuts: sources})
			break
		case 'get-fact':
			console.log(dailyFact)
			let fact = dailyFact[Math.floor(Math.random() * dailyFact.length())]
			sendResponse({fact: fact})
			break
	}
})
chrome.action.onClicked.addListener((tab) => {
	chrome.tabs.sendMessage(tab.id, {message: 'open-paths'}, function (response) {})
})
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => reorderData())

function setFact() {
	fetch('https://cat-fact.herokuapp.com/facts')
		.then((response) => response.json())
		.then((fact) => {
			dailyFact = fact
		})
		.then(() => {
			chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {quote: dailyFact}, function (response) {
					console.log(dailyFact)
				})
			})
		})
}
const getCurrentTab = async () => {
	return await chrome.tabs.query({active: true, currentWindow: true})
}
function reorderData() {
	getCurrentTab().then((response) => {
		// wrap in try/catch in case of error
		let page
		try {
			page = response[0].url.split('www.')[1].split('.')[0]
		} catch (error) {}
		for (let i = 0; i < sources.length; i++) {
			try {
				if (sources[i].title.toLowerCase().includes(page.toLowerCase())) {
					let temp = sources[0]
					sources[0] = sources[i]
					sources[i] = temp
				}
			} catch (error) {}
		}
	})
}
