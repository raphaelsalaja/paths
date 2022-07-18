import {data} from './data/data.js'

let dailyQuote
let sources = []
sources = data

chrome.runtime.onInstalled.addListener(function () {
	console.clear()
	chrome.tabs.create({url: 'https://rafunderscore.vercel.app/paths/'})
})
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	switch (message.request) {
		case 'get-shortcuts':
			reorderData()
			sendResponse({shortcuts: sources})
			break
		case 'get-quote':
			setQuote()
			let quote = dailyQuote.content + ' - ' + dailyQuote.author
			sendResponse({quote: quote})
			break
	}
})
chrome.action.onClicked.addListener((tab) => {
	chrome.tabs.sendMessage(tab.id, {message: 'open-paths'}, function (response) {})
})
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	reorderData()
	if (changeInfo.status === 'complete') {
		setQuote()
	}
})
chrome.commands.onCommand.addListener((command) => {
	if (command == 'open-paths') {
		chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
			var url = tabs[0].url
			if (url.includes('chrome://') && url.includes('chrome.google.com')) {
			} else {
				chrome.tabs.sendMessage(tabs[0].id, {message: 'open-paths'}, function (response) {})
			}
		})
	}
})

function setQuote() {
	fetch('https://api.quotable.io/random?tags=technology')
		.then((response) => response.json())
		.then((quote) => {
			dailyQuote = quote
		})
		.then(() => {
			chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {quote: dailyQuote}, function (response) {})
			})
		})
}
const getCurrentTab = async () => {
	return await chrome.tabs.query({active: true, currentWindow: true})
}
function reorderData() {
	getCurrentTab().then((response) => {
		for (let i = 0; i < sources.length; i++) {
			let source = sources[i]
			let title = source.title
			let index = response[0].title.indexOf(title)
			if (index > -1) {
				sources.splice(i, 1)
				sources.unshift(source)
			}
		}
	})
}
