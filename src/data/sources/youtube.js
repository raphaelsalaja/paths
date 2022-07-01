export const youtube = {
	title: 'Youtube',
	icon: 'youtube.png',
	sections: [
		{
			name: 'Playback',
			shorcuts: [
				{
					description: 'Toggle play/pause',
					shortcut: ['k'],
				},
				{
					description: 'Rewind 10 seconds',
					shortcut: ['j'],
				},
				{
					description: 'Fast forward 10 seconds',
					shortcut: ['l'],
				},
				{
					description: 'Previous video',
					shortcut: ['P', 'SHIFT + P'],
				},
				{
					description: 'Next video',
					shortcut: ['N', 'SHIFT + N'],
				},
				{
					description: 'Previous frame (while paused)',
					shortcut: [','],
				},
				{
					description: 'Next frame (while paused)',
					shortcut: ['.'],
				},
				{
					description: 'Decrease playback rate',
					shortcut: ['<', 'SHIFT + ,'],
				},
				{
					description: 'Increase playback rate',
					shortcut: ['>', 'SHIFT + .'],
				},
				{
					description: 'Seek to specific point in the video (7 advances to 70% of duration)',
					shortcut: ['0..9'],
				},
				{
					description: 'Seek to previous chapter',
					shortcut: ['CONTROL + ←'],
				},
				{
					description: 'Seek to next chapter',
					shortcut: ['CONTROL + →'],
				},
			],
		},
		{
			name: 'General',
			shorcuts: [
				{
					description: 'Toggle full screen',
					shortcut: ['f'],
				},
				{
					description: 'Toggle theater mode',
					shortcut: ['t'],
				},
				{
					description: 'Toggle miniplayer',
					shortcut: ['i'],
				},
				{
					description: 'Close miniplayer or current dialog',
					shortcut: ['ESCAPE'],
				},
				{
					description: 'Toggle mute',
					shortcut: ['m'],
				},
			],
		},
		{
			name: 'Subtitles and Closed Captions',
			shorcuts: [
				{
					description: 'If the video supports captions, toggle captions ON/OFF',
					shortcut: ['c'],
				},
				{
					description: 'Rotate through different text opacity levels',
					shortcut: ['o'],
				},
				{
					description: 'Rotate through different window opacity levels',
					shortcut: ['w'],
				},
				{
					description: 'Rotate through font sizes (increasing)',
					shortcut: ['+'],
				},
				{
					description: 'Rotate through font sizes (decreasing)',
					shortcut: ['-'],
				},
			],
		},
		{
			name: 'Spherical Videos',
			shorcuts: [
				{
					description: 'Pan up',
					shortcut: ['w'],
				},
				{
					description: 'Pan left',
					shortcut: ['a'],
				},
				{
					description: 'Pan down',
					shortcut: ['s'],
				},
				{
					description: 'Pan right',
					shortcut: ['d'],
				},
				{
					description: 'Zoom in',
					shortcut: ['+', ' ]'],
				},
				{
					description: 'Zoom out',
					shortcut: ['-', '['],
				},
			],
		},
	],
}
