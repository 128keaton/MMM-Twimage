# MMM-Twimage
Twitter Feed images for MagicMirror<sup>2</sup>

## Dependencies
  * An installation of [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror)
  * npm
  * [twitter](https://www.npmjs.com/package/twitter)
  * [Twitter Application](https://apps.twitter.com)

## Installation
 1. Clone this repo into `~/MagicMirror/modules` directory.
 2. Configure your `~/MagicMirror/config/config.js`:

    ```
    {
			module: 'twimage',
			position: 'top_left',
			config: {
				screenName: "interior",
				count: '10',
				consumerKey: 'xxx',
				consumerSecret:'xxx',
				accessTokenKey:'xxx',
				accessTokenSecret:'xxx'
			}
    ```
 3. Run command `npm install` in `~/MagicMirror/modules/MMM-Twimage` directory.

## Config Options
| **Option** | **Default** | **Description** |
| --- | --- | --- |
| `consumerKey` | Empty | Twitter consumer key |
| `consumerSecret` | Empty | Twitter consumer secret |
| `accessTokenKey` | Empty | Twitter access token key |
| `accessTokenSecret` | Empty | Twitter access token secret |
| `loadingText` | 'Loading images' | Loading text displayed while accessing Twitter |
| `screenName` | 'interior' | Twitter username to pull images from (without the @) |
| `count` | '10' | How many tweets to scan for images |
