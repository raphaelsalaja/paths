var paths_open = false
$(document).ready(() => {
	$.get(chrome.runtime.getURL('/content.html'), (data) => {
		$(data).appendTo('body')
	})
	function open_paths() {
		paths_open = true
		set_shortcuts()
		set_fact()
		$('#paths-extension').removeClass('paths-hidden')
		$('#paths-extension #paths-search-box').focus()
		$('#paths-extension #paths-search-box').attr('autocomplete', 'off')
	}
	function close_paths() {
		paths_open = false
		$('#paths-extension').addClass('paths-hidden')
		clear_shortcuts()
	}
	function clear_shortcuts() {
		$('#paths-extension #paths-list').empty()
	}
	function set_shortcuts() {
		chrome.runtime.sendMessage({request: 'get-shortcuts'}, (response) => {
			for (let i = 0; i < response.shortcuts.length; i++) {
				let $paths_shortcut_section = $('<div>', {
					id: 'paths-shortcuts-section',
				})
				let $paths_shortcuts_section_title = $('<div>', {
					id: 'paths-shortcuts-section-title',
				})
				let $paths_shortcuts_section_title_container = $('<div>', {
					id: 'paths-shortcuts-section-title-container',
				})
				let $paths_shortcuts_section_title_icon = $('<img>', {
					id: 'paths-shortcuts-section-title-icon',
					src: response.shortcuts[i].icon,
				})
				let $paths_shortcuts_section_title_text = $('<div>', {
					id: 'paths-shortcuts-section-title-text',
					text: response.shortcuts[i].title,
				})
				$paths_shortcuts_section_title_container.append($paths_shortcuts_section_title_icon)
				$paths_shortcuts_section_title_container.append($paths_shortcuts_section_title_text)
				$paths_shortcuts_section_title.append($paths_shortcuts_section_title_container)
				$paths_shortcut_section.append($paths_shortcuts_section_title)

				for (let j = 0; j < response.shortcuts[i].sections.length; j++) {
					let $paths_shortcuts_section_results_group = $('<div>', {
						id: 'paths-shortcuts-section-results-group',
					})
					let $paths_shortcuts_section_results_group_heading = $('<div>', {
						id: 'paths-shortcuts-section-results-group-heading',
					})
					let $paths_shortcuts_section_results_group_heading_container = $('<div>', {
						id: 'paths-shortcuts-section-results-group-heading-container',
					})
					let $paths_shortcuts_section_results_group_heading_text = $('<span>', {
						id: 'paths-shortcuts-section-results-group-heading-text',
						text: response.shortcuts[i].sections[j].name,
					})
					let $paths_shortcuts_section_results_group_columns_container = $('<div>', {
						id: 'paths-shortcuts-section-results-group-columns-container',
					})
					let $paths_shortcuts_section_results_group_column_1 = $('<div>', {
						'id': 'paths-shortcuts-section-results-group-column-1',
						'data-column': 1,
					})
					let $paths_shortcuts_section_results_group_column_2 = $('<div>', {
						'id': 'paths-shortcuts-section-results-group-column-2',
						'data-column': 2,
					})
					let $paths_shortcuts_section_results_group_column_3 = $('<div>', {
						'id': 'paths-shortcuts-section-results-group-column-3',
						'data-column': 3,
					})
					for (let k = 0; k < response.shortcuts[i].sections[j].shortcuts.length; k++) {
						let $paths_shortcut = $('<div>', {
							id: 'paths-shortcut',
						})
						let $paths_result_left = $('<div>', {
							id: 'paths-result-left',
						})
						let $paths_action = $('<div>', {
							id: 'paths-action',
						})
						let $paths_action_text = $('<span>', {
							'id': 'paths-action-text',
							'text': response.shortcuts[i].sections[j].shortcuts[k].description,
							'data-action': response.shortcuts[i].sections[j].shortcuts[k].description,
						})
						let $paths_result_right = $('<div>', {
							id: 'paths-result-right',
						})
						let $paths_combination = $('<div>', {
							id: 'paths-combination',
						})

						for (let l = 0; l < response.shortcuts[i].sections[j].shortcuts[k].keys.length; l++) {
							let $paths_combination_key = $('<div>', {
								id: 'paths-combination-key',
							})
							let $paths_combination_key_text
							if (response.shortcuts[i].sections[j].shortcuts[k].keys[l].length === 1) {
								$paths_combination_key_text = $('<span>', {
									text: response.shortcuts[i].sections[j].shortcuts[k].keys[l].toUpperCase(),
								})
							} else {
								$paths_combination_key_text = $('<span>', {
									'text': response.shortcuts[i].sections[j].shortcuts[k].keys[l].toUpperCase(),
									'data-action': response.shortcuts[i].sections[j].shortcuts[k].keys[l].toUpperCase(),
								})
							}

							$paths_combination_key.append($paths_combination_key_text)
							$paths_combination.append($paths_combination_key)
						}
						$paths_result_right.append($paths_combination)
						$paths_result_right.append($paths_action)
						$paths_action.append($paths_action_text)
						$paths_result_left.append($paths_action)

						$paths_shortcut.append($paths_result_left)
						$paths_shortcut.append($paths_result_right)

						if (k % 3 == 0) {
							$paths_shortcuts_section_results_group_column_1.append($paths_shortcut)
						} else if (k % 3 == 1) {
							$paths_shortcuts_section_results_group_column_2.append($paths_shortcut)
						} else if (k % 3 == 2) {
							$paths_shortcuts_section_results_group_column_3.append($paths_shortcut)
						}
					}
					$paths_shortcuts_section_results_group_columns_container.append($paths_shortcuts_section_results_group_column_1)
					$paths_shortcuts_section_results_group_columns_container.append($paths_shortcuts_section_results_group_column_2)
					$paths_shortcuts_section_results_group_columns_container.append($paths_shortcuts_section_results_group_column_3)
					$paths_shortcuts_section_results_group_heading_container.append($paths_shortcuts_section_results_group_heading_text)
					$paths_shortcuts_section_results_group_heading.append($paths_shortcuts_section_results_group_heading_container)
					$paths_shortcuts_section_results_group.append($paths_shortcuts_section_results_group_heading)
					$paths_shortcuts_section_results_group.append($paths_shortcuts_section_results_group_columns_container)

					$paths_shortcut_section.append($paths_shortcuts_section_results_group)
					$('#paths-list').append($paths_shortcut_section)
				}
			}
		})
	}
	function search_shortcuts() {
		let search_box_value = $('#paths-search-box').val().toLowerCase()
		$('#paths-list').scrollTop(0)
		if (search_box_value == '' || search_box_value.length == 0) {
			$('div[id="paths-shortcut"]').each(function () {
				$(this).show()
			})
			$('div[id="paths-shortcuts-section"]').each(function () {
				$(this).show()
			})
			$('div[id="paths-shortcuts-section-results-group"]').each(function () {
				$(this).show()
			})
			$('div[id="paths-shortcuts-section-results-group-column-1"]').each(function () {
				$(this).show()
			})
			$('div[id="paths-shortcuts-section-results-group-column-2"]').each(function () {
				$(this).show()
			})
			$('div[id="paths-shortcuts-section-results-group-column-3"]').each(function () {
				$(this).show()
			})
		} else if (search_box_value.startsWith('/')) {
			let search_box_value_without_slash = search_box_value.substring(1)
			$('div[id="paths-shortcuts-section-title-text"]').each(function () {
				let text = $(this).text().toLowerCase()

				if (text.includes(search_box_value_without_slash)) {
					$(this).parent().parent().parent().show()
				} else {
					$(this).parent().parent().parent().hide()
				}
			})
		} else {
			$('div[id="paths-shortcut"]').each(function () {
				let shortcut_action_text_lowercase = $(this).find('#paths-action-text').attr('data-action').toLowerCase()
				if (shortcut_action_text_lowercase.includes(search_box_value)) {
					$(this).show()
				} else {
					$(this).hide()
				}
			})
			$('div[id="paths-shortcuts-section"]').each(function () {
				let shortcuts_visible = false
				$(this)
					.find('div[id="paths-shortcut"]')
					.each(function () {
						if ($(this).css('display') != 'none') {
							shortcuts_visible = true
						}
					})
				if (shortcuts_visible) {
					$(this).show()
				} else {
					$(this).hide()
				}
			})
			$('div[id="paths-shortcuts-section-results-group"]').each(function () {
				let shortcuts_visible = false
				$(this)
					.find('div[id="paths-shortcut"]')
					.each(function () {
						if ($(this).css('display') != 'none') {
							shortcuts_visible = true
						}
					})
				if (shortcuts_visible) {
					$(this).show()
				} else {
					$(this).hide()
				}
			})
			$('div[id="paths-shortcuts-section-results-group-column-1"]').each(function () {
				let shortcuts_visible = false
				$(this)
					.find('div[id="paths-shortcut"]')
					.each(function () {
						if ($(this).css('display') != 'none') {
							shortcuts_visible = true
						}
					})
				if (shortcuts_visible) {
					$(this).show()
				} else {
					$(this).hide()
				}
			})
			$('div[id="paths-shortcuts-section-results-group-column-2"]').each(function () {
				let shortcuts_visible = false
				$(this)
					.find('div[id="paths-shortcut"]')
					.each(function () {
						if ($(this).css('display') != 'none') {
							shortcuts_visible = true
						}
					})
				if (shortcuts_visible) {
					$(this).show()
				} else {
					$(this).hide()
				}
			})
			$('div[id="paths-shortcuts-section-results-group-column-3"]').each(function () {
				let shortcuts_visible = false
				$(this)
					.find('div[id="paths-shortcut"]')
					.each(function () {
						if ($(this).css('display') != 'none') {
							shortcuts_visible = true
						}
					})
				if (shortcuts_visible) {
					$(this).show()
				} else {
					$(this).hide()
				}
			})
			$
		}
	}
	function set_fact() {
		chrome.runtime.sendMessage({request: 'get-fact'}, (response) => {
			let fact_text = response.fact.text
			$('#paths-cat-facts-text').text(fact_text)
		})
	}
	$(document).on('input', '#paths-search-box', search_shortcuts)
	chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
		switch (request.message) {
			case 'open-paths':
				paths_open ? close_paths() : open_paths()
				sendResponse({return: 'paths opened'})
				return true
				break
			case 'close-paths':
				closepaths()
				sendResponse({return: 'paths closed'})
				return true
				break
		}
		return true
	})
	$(document).on('click', '#paths-overlay', function (e) {
		if (e.target.id == 'paths-overlay') {
			close_paths()
		}
	})
	$(document).keyup(function (e) {
		if (e.keyCode == 27) {
			close_paths()
		}
	})
})
