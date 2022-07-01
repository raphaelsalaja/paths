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
	function set_shortcuts() {
		// call background.js to get shortcuts and set it to a variable
		//  <div id='paths-shortcuts-section'>
		// 	<div id='paths-shortcuts-section-title'>
		// 		<div id='paths-shortcuts-section-title-container'>
		// 			<div id='paths-shortcuts-section-title-text'>📖 Visual Studio Code</div>
		// 		</div>
		// 	</div>
		// 	<div id='paths-shortcuts-section-results-group'>
		// 		<div id='paths-shortcuts-section-results-group-heading'>
		// 			<div id='paths-shortcuts-section-results-group-heading-container'>
		// 				<span>General</span>
		// 			</div>
		// 		</div>
		// 		<div id='paths-shortcuts-section-results-group-columns-container'>
		// 			<div id='paths-shortcuts-section-results-group-column-1'>
		// 				<div id='paths-shortcut'>
		// 					<div id='paths-result-left'>
		// 						<div id='paths-action'>
		// 							<span>Show Command Palette</span>
		// 						</div>
		// 					</div>
		// 					<div id='paths-result-right'>
		// 						<div id='paths-combination'>
		// 							<div id='paths-combination-key'>
		// 								<span>⌘</span>
		// 							</div>
		// 							<div id='paths-combination-key'>
		// 								<span>⇧</span>
		// 							</div>
		// 							<div id='paths-combination-key'>
		// 								<span>P</span>
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 			<div id='paths-shortcuts-section-results-group-column-2'>
		// 				<div id='paths-shortcut'>
		// 					<div id='paths-result-left'>
		// 						<div id='paths-action'>
		// 							<span>Show Command Palette</span>
		// 						</div>
		// 					</div>
		// 					<div id='paths-result-right'>
		// 						<div id='paths-combination'>
		// 							<div id='paths-combination-key'>
		// 								<span>⌘</span>
		// 							</div>
		// 							<div id='paths-combination-key'>
		// 								<span>⇧</span>
		// 							</div>
		// 							<div id='paths-combination-key'>
		// 								<span>P</span>
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 			<div id='paths-shortcuts-section-results-group-column-3'>
		// 				<div id='paths-shortcut'>
		// 					<div id='paths-result-left'>
		// 						<div id='paths-action'>
		// 							<span>Show Command Palette</span>
		// 						</div>
		// 					</div>
		// 					<div id='paths-result-right'>
		// 						<div id='paths-combination'>
		// 							<div id='paths-combination-key'>
		// 								<span>⌘</span>
		// 							</div>
		// 							<div id='paths-combination-key'>
		// 								<span>⇧</span>
		// 							</div>
		// 							<div id='paths-combination-key'>
		// 								<span>P</span>
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
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
