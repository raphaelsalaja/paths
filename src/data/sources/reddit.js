export const reddit = {
	title: 'Reddit',
	icon: 'https://www.redditstatic.com/desktop2x/img/favicon/favicon-32x32.png',
	sections: [
		{
			name: 'Navigation',
			shortcuts: [
				{
					description: 'Show shortcuts',
					keys: ['Shift', '?'],
				},
				{
					description: 'Next post or comment',
					keys: ['J'],
				},
				{
					description: 'Previous post or comment',
					keys: ['K'],
				},
				{
					description: 'Next post in lightbox',
					keys: ['N'],
				},
				{
					description: 'Previous post in lightbox',
					keys: ['P'],
				},
				{
					description: 'Open post',
					keys: ['Enter'],
				},
				{
					description: 'Open or close expando',
					keys: ['X'],
				},
				{
					description: 'Go to post link',
					keys: ['L'],
				},
			],
		},
		{
			name: 'Action',
			shortcuts: [
				{
					description: 'Upvote',
					keys: ['A'],
				},
				{
					description: 'Downvote',
					keys: ['Z'],
				},
				{
					description: 'New post',
					keys: ['C'],
				},
				{
					description: 'Reply to comments',
					keys: ['R'],
				},
				{
					description: 'Submit comment or post',
					keys: ['Ctrl', 'Enter'],
				},
				{
					description: 'Save',
					keys: ['S'],
				},
				{
					description: 'Hide',
					keys: ['H'],
				},
				{
					description: 'Open navigation',
					keys: ['Q'],
				},
				{
					description: 'Collapse or expand comment',
					keys: ['Enter'],
				},
			],
		},
	],
}
