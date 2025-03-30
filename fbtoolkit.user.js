const fastcsv = require('fast-csv');

// ==UserScript==
// @name        Facebook Toolkit
// @namespace   https://github.com/RootDev4/Facebook-Toolkit
// @version     0.4
// @description JavaScript Userscript for Facebook automation
// @author      RootDev4 (Chris)
// @match       https://www.facebook.com/*
// @grant       none
// @run-at      document-idle
// ==/UserScript==

import { getUserId, showUserId, getUsername, getVanityName } from './utils/jsonUtils.js';
import { scrollTimeline, expandTimeline, extractFriends, downloadPhotos, clearTimeline } from './utils/htmlUtils.js';

// Configuration
const CONFIG = {
    SCROLL_DELAY: 200,
    MAX_RETRIES: 3,
    EXPORT_FORMATS: ['csv', 'json']
};

const fbLoaderImg = 'https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/GsNJNwuI-UM.gif';

function toggleLoaderImg() {
    try {
        const img = document.querySelector('img#fbToolkitImg');
        if (!img) throw new Error('Loader image not found');
        img.classList.toggle('hidden_elem');
    } catch (exception) {
        console.error('Toggle loader failed:', exception);
    }
}
