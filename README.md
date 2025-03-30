# Facebook Toolkit
JavaScript Userscript for Facebook automation.

![Facebook Toolkit](https://www1.xup.in/exec/ximg.php?fid=14551942)

## Usage

I recommend to use Google Chrome browser for this UserScript. Install browser addon Greasemonkey or Tampermonkey. After installation, open [fbtoolkit.user.js script file](https://github.com/RootDev4/Facebook-Toolkit/blob/master/fbtoolkit.user.js) and click the **Raw** button. The user script gets installed automatically by Greasemonkey/Tampermonkey addon. Facebook Toolkit is now accessible from the bluebar. Visit any Facebook user profile to test.

## Troubleshooting

If Facebook Toolkit isn't present in the bluebar or doesn't respond, please reload the page manually by pressing Shift+F5. This will reload the whole page from the server and not from your browser's cache.

Due to Facebook's regular modifications of HTML structure / DOM, some element selectors may not work correctly (especially for expanding user's timeline). If so, please visit my GitHub profile and leave me a hint over email. Thanks in advance!

## Functionality

Scrolling/extracting actions are confirmed by a popup message when finished. So please be patient, if the script will run a little longer...

### Get numeric user ID
Return the numeric Facebook user ID in a popup window.

### Show user ID on cover
Display the numeric Facebook user ID inside the timeline cover right below the username.

### Scroll user timeline
Scroll the user's timeline to the very beginning automatically.

### Expand hidden content
Expand hidden content like "See more" text or covered comments.

### Clear timeline
Remove boxes and buttons with unwanted content for printing the user's profile.

### Extract user's friendlist
Extract all visible friends or followers and print out as CSV formatted string. After you had copied the output, reload the page manually to get back to Facebook.

### Download user's photos
Download all uploaded photos. After scraping user's photos, please save page manually to your computer (Ctrl+S) to download all photos. After you had downloaded the page, reload the page manually to get back to Facebook.

### Jump to page bottom / Jump to page top
Self-explaining.

### Force page reload
Reload the current page from the server (not from the cache).

## New Features

### Download Videos
Added the ability to download videos from Facebook profiles.

### Scrape Additional User Data
Added the ability to scrape additional user data such as email addresses and phone numbers.

### Improved User Interface
Enhanced the user interface with more styling and a visually appealing design.

### Localization Support
Added localization support to make the toolkit accessible to users who speak different languages.

## Running the Linter and Tests

### Running the Linter
To check for code style issues, run the following command:
```bash
npm run lint
```

### Running the Tests
To run the tests and ensure the functionality of the code, use the following command:
```bash
npm test
```

## Contributing

We welcome contributions to the Facebook Toolkit project! If you would like to contribute, please follow the guidelines in the [CONTRIBUTING.md](CONTRIBUTING.md) file.
