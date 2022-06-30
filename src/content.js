var paths_open = false
$(document).ready(() => {
	$.get(chrome.runtime.getURL('/content.html'), (data) => {
		$(data).appendTo('body')
	})
	function open_paths() {
		paths_open = true
		$('#paths-extension').removeClass('paths-hidden')
		$('#paths-extension #paths-search-box').focus()
		$('#paths-extension #paths-search-box').attr('autocomplete', 'off')
	}
	function close_paths() {
		paths_open = false
		$('#paths-extension').addClass('paths-hidden')
	}
	chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
		switch (request.message) {
			case 'open-paths':
				paths_open ? close_paths() : open_paths()
				sendResponse({return: 'paths opened'})
				break
			case 'close-paths':
				closepaths()
				sendResponse({return: 'paths closed'})
				break
		}
		return true
	})
})
