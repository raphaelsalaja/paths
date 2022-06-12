import {data} from './data/data.js'

let dailyQuote = ''

function setQuote() {
	fetch('https://zenquotes.io/api/today')
		.then((response) => response.json())
		.then((quote) => {
			dailyQuote = quote
			console.log(dailyQuote)
		})
}

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
