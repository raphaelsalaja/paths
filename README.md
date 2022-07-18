 
![Product Hunt _ Screenshot _ asdfasdfdsaf](https://user-images.githubusercontent.com/52125687/178572560-088dd244-f242-4536-8d4b-3f3294e35674.png)
<a href="https://www.producthunt.com/posts/paths-3?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-paths&#0045;3" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=352591&theme=dark" alt="Paths - Find&#0032;shortcuts&#0032;for&#0032;apps&#0032;and&#0032;websites&#0032;in&#0032;your&#0032;browser | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

## Why would you use this? 🔎

Learning shortcuts and quick commands can almost double your productivity. Paths shows you the all the available shortcuts and commands for the most popular websites and apps that you use on a daily basis.

👉 [Github Link](https://github.com/raf-underscore/paths)

## What can you expect 🤔

Using this you will be able to search for a shortcut or command and see what it does. You will also be able to run the command by clicking on the shortcut.

## Contributions 🔮

If you would like to contribute to this project, please open an issue or pull request. 

If you would like to add a shortcut or command you can do so by following these steps:

1. Create a new .js file in the source folder. You can use the template file provided as a starting point.

```
.
└── src
    └── data
        └── sources
```

```js
export const template = {
	title: 'Title',
	icon: '', // use a favicon, such as https://www.youtube.com/favicon.ico
	sections: [
		{
			name: 'Name1',
			shortcuts: [
				{
					description: 'Description 1',
					keys: ['Key1', 'Key2'],
				},
			],
		},
		{
			name: 'Name2',
			shortcuts: [
				{
					description: 'Description 1',
					keys: ['Key1', 'Key2'],
				},
			],
		},
	],
}
```
2. Add the new file import to the data.js file in the source folder.
 
```js
import {adobe_photoshop} from './sources/adobe-photoshop.js'
...
import {YOUR_CONTRIBUTION_HERE} from './sources/YOUR_CONTRIBUTION,.js'

export const data = [
	adobe_photoshop,
...
    YOUR_CONTRIBUTION_HERE,
]
```
 

## Local Installation 🏠
 
 - Download and extract the contents
 - In Chrome, open chrome://extensions/
 - Click + Developer mode
 - Click Load unpacked extension…
 - Navigate to the src folder and click OK
 - Enable The Extension
 
 ## Using The Application 🔥

Opening Paths can be done by pressing <kbd>⌘ Command</kbd>+<kbd>Shift</kbd>+<kbd>Y</kbd> on Mac or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Y</kbd> on Windows. You can change the shortcut by going to chrome://extensions/shortcuts in Chrome. Also, if you cannnot use the command for some reason, you can also open it by pressing the app button on the top bar.

Closing the app can be done by either clicking on the background, pressing <kbd>Esc</kbd> or by pressing the icon on the topbar.
 
## Support 💌

If you find the app useful and want to support me, you can do so by support me on Product Hunt, giving the repo a star on Github, or by following me on twitter. The links to all can be found below:

👉 [Linktree](https://linktr.ee/raf_underscore)

<h1 align="center">
    ENJOY THE APP! 😄
</h1>
