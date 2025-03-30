# Facebook Toolkit
JavaScript Userscript for Facebook automation.

![Facebook Toolkit](https://www1.xup.in/exec/ximg.php?fid=14551942)

## Usage

I recommend to use Google Chrome browser for this UserScript. Install browser addon Greasemonkey or Tampermonkey. After installation, open [fbtoolkit.user.js script file](https://github.com/RootDev4/Facebook-Toolkit/blob/master/fbtoolkit.user.js) and click the **Raw** button. The user script gets installed automatically by Greasemonkey/Tampermonkey addon. Facebook Toolkit is now accessible from the bluebar. Visit any Facebook user profile to test.

### Example Usage

Here is an example of how to use the `extractFriends` function:

```javascript
extractFriends()
  .then(friends => {
    console.log(`Extracted ${friends.list.length} friends.`);
    friends.list.forEach(friend => {
      console.log(`Name: ${friend.name}, Link: ${friend.link}`);
    });
  })
  .catch(error => {
    console.error('Error extracting friends:', error);
  });
```

### Usage Instructions for `convertJsonToHtml` Function

The `convertJsonToHtml` function converts JSON information into readable HTML data and pictures. It also includes interactive charts, graphs, filtering options, and drag-and-drop functionality.

#### Example Usage

Here is an example of how to use the `convertJsonToHtml` function:

```javascript
const jsonData = {
  "name": "John Doe",
  "age": 30,
  "email": "john.doe@example.com",
  "profilePicture": "https://example.com/profile.jpg"
};

const htmlContent = convertJsonToHtml(jsonData);
document.getElementById('output').innerHTML = htmlContent;
```

### Interactive Elements

The `convertJsonToHtml` function includes the following interactive elements:

1. **Buttons and Links**: Basic interactive elements such as buttons and links to allow users to navigate through the data.
2. **Collapsible Sections**: Collapsible sections to hide or show detailed information as needed.
3. **Search Functionality**: Search functionality to help users find specific data quickly.
4. **Interactive Charts and Graphs**: Interactive charts and graphs to visualize the data more effectively.
5. **Filtering Options**: Filtering options to allow users to customize the displayed data based on specific criteria.
6. **Drag-and-Drop Functionality**: Drag-and-drop functionality for rearranging data elements.

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

## Frequently Asked Questions (FAQs)

### How do I install the Facebook Toolkit?
Follow the instructions in the [Usage](#usage) section to install the Facebook Toolkit.

### What should I do if the Facebook Toolkit isn't working?
Refer to the [Troubleshooting](#troubleshooting) section for steps to resolve common issues.

### How can I contribute to the project?
See the [Contributing](#contributing) section below for guidelines on how to contribute.

## Contributing

We welcome contributions to the Facebook Toolkit project! To get started, please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to report issues, submit pull requests, and follow our coding standards.
