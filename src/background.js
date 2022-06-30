import {data} from './data/data.js'

let dailyQuote

chrome.runtime.onInstalled.addListener(function () {
	console.clear()
	setQuote()
	chrome.alarms.create('update-quote', {periodInMinutes: 1440})
})

chrome.alarms.onAlarm.addListener(function (alarm) {
	if (alarm.name === 'update-quote') {
		setQuote()
	}
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	switch (message.request) {
		case 'get-shorcuts':
			sendResponse({data: data})
			break
		case 'get-quote':
			sendResponse({quote: dailyQuote})
			break
	}
})

chrome.action.onClicked.addListener((tab) => {
	chrome.tabs.sendMessage(tab.id, {message: 'open-paths'}, function (response) {})
})

function setQuote() {
	fetch('https://zenquotes.io/api/today')
		.then((response) => response.json())
		.then((quote) => {
			dailyQuote = quote
		})
		.then(() => {
			chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {quote: dailyQuote}, function (response) {
					console.log(dailyQuote)
				})
			})
		})
}
