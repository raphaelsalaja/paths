export const youtube = {
	title: 'YouTube',
	icon: 'https://www.youtube.com/favicon.ico',
	sections: [
		{
			name: 'Playback',
			shortcuts: [
				{
					description: 'Toggle play/pause',
					keys: ['k'],
				},
				{
					description: 'Rewind 10 seconds',
					keys: ['j'],
				},
				{
					description: 'Fast forward 10 seconds',
					keys: ['l'],
				},
				{
					description: 'Previous video',
					keys: ['P'],
				},
				{
					description: 'Next video',
					keys: ['N'],
				},
				{
					description: 'Previous frame (while paused)',
					keys: [','],
				},
				{
					description: 'Next frame (while paused)',
					keys: ['.'],
				},
				{
					description: 'Decrease playback rate',
					keys: ['<'],
				},
				{
					description: 'Increase playback rate',
					keys: ['>'],
				},
				{
					description: 'Seek to a point e.g 7 = 70%',
					keys: ['Numpad'],
				},
				{
					description: 'Seek to previous chapter',
					keys: ['Ctrl', '←'],
				},
				{
					description: 'Seek to next chapter',
					keys: ['Ctrl', '→'],
				},
			],
		},
		{
			name: 'General',
			shortcuts: [
				{
					description: 'Toggle full screen',
					keys: ['f'],
				},
				{
					description: 'Toggle theater mode',
					keys: ['t'],
				},
				{
					description: 'Toggle miniplayer',
					keys: ['i'],
				},
				{
					description: 'Close miniplayer or current dialog',
					keys: ['Esc'],
				},
				{
					description: 'Toggle mute',
					keys: ['m'],
				},
			],
		},
		{
			name: 'Subtitles and Closed Captions',
			shortcuts: [
				{
					description: 'If the video supports captions, toggle captions ON/OFF',
					keys: ['c'],
				},
				{
					description: 'Rotate through different text opacity levels',
					keys: ['o'],
				},
				{
					description: 'Rotate through different window opacity levels',
					keys: ['w'],
				},
				{
					description: 'Increase font size',
					keys: [','],
				},
				{
					description: 'Decrease font size',
					keys: ['-'],
				},
			],
		},
		{
			name: 'Spherical Videos',
			shortcuts: [
				{
					description: 'Pan up',
					keys: ['w'],
				},
				{
					description: 'Pan left',
					keys: ['a'],
				},
				{
					description: 'Pan down',
					keys: ['s'],
				},
				{
					description: 'Pan right',
					keys: ['d'],
				},
				{
					description: 'Zoom in',
					keys: [',', ' ]'],
				},
				{
					description: 'Zoom out',
					keys: ['- ', ' ['],
				},
			],
		},
	],
}
