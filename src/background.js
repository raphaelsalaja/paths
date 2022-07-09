import {data} from './data/data.js'

let dailyQuote
let sources = []
sources = data

chrome.runtime.onInstalled.addListener(function () {
	console.clear()
	setQuote()
})
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	switch (message.request) {
		case 'get-shortcuts':
			sendResponse({shortcuts: sources})
			break
		case 'get-quote':
			let quote = dailyQuote.content + ' - ' + dailyQuote.author
			console.log(quote)
			sendResponse({quote: quote})
			break
	}
})
chrome.action.onClicked.addListener((tab) => {
	chrome.tabs.sendMessage(tab.id, {message: 'open-paths'}, function (response) {})
})
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => reorderData())

function setQuote() {
	fetch('https://api.quotable.io/random?tags=technology,famous-quotes')
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
		let page = response[0].url.split('www.')[1].split('.')[0]
		for (let i = 0; i < sources.length; i++) {
			if (sources[i].title.toLowerCase().includes(page.toLowerCase())) {
				let temp = sources[0]
				sources[0] = sources[i]
				sources[i] = temp
			}
		}
	})
}
