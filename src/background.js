import {data} from './data/data.js'

let dailyFact

chrome.runtime.onInstalled.addListener(function () {
	console.clear()
	setFact()
	chrome.alarms.create('update-quote', {periodInMinutes: 1440})
})

chrome.alarms.onAlarm.addListener(function (alarm) {
	if (alarm.name === 'update-quote') {
		setFact()
	}
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	switch (message.request) {
		case 'get-shortcuts':
			console.log(data)
			sendResponse({shortcuts: data})
			break
		case 'get-fact':
			sendResponse({fact: dailyFact})
			break
	}
})

chrome.action.onClicked.addListener((tab) => {
	chrome.tabs.sendMessage(tab.id, {message: 'open-paths'}, function (response) {})
})

function setFact() {
	fetch('https://cat-fact.herokuapp.com/facts')
		.then((response) => response.json())
		.then((fact) => {
			// get the first fact
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
