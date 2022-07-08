<p align="center">
    <img width="1012" alt="Twitter" src="https://user-images.githubusercontent.com/52125687/177175352-e906777b-4af9-498e-8e45-76ad5875dfd2.png"></br>
</p>

## Why would you use this? 🔎

Learning shortcuts and quick commands can almost double your productivity. This makes completing tasks faster and easier. Paths shows you the all the available shortcuts and commands for any of the most popular pages

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

Opening/Closing Paths can be done by pressing the app button on the top bar.<br>
<kbd>/</kbd> followed by a website name will show all the shortcuts relevant to it
 
## Support 💌

If you find the app useful and want to support me, you can do so by support me on Product Hunt, giving the repo a star on Github, or by following me on twitter. The links to all can be found below:

👉 [Linktree](https://linktr.ee/raf_underscore)

<h1 align="center">
    ENJOY THE APP! 😄
</h1>
