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

function getUserId(retries = CONFIG.MAX_RETRIES) {
    try {
        const pagelet = document.getElementById('pagelet_timeline_main_column');
        if (!pagelet) throw new Error('Timeline container not found');
        const data = JSON.parse(pagelet.getAttribute('data-gt'));
        if (!data?.profile_owner) throw new Error('Profile owner data missing');
        return data.profile_owner;
    } catch (exception) {
        console.error('Get user ID failed:', exception);
        if (retries > 0) {
            console.log(`Retrying... (${retries} attempts left)`);
            return getUserId(retries - 1);
        }
        alert('Getting Facebook user ID failed.\nSee console log for details.');
        return 0;
    }
}

function showUserId() {
    try {
        const userId = getUserId();
        if (!userId) throw new Error('Invalid user ID');
        const coverName = document.getElementById('fb-timeline-cover-name');
        if (!coverName) throw new Error('Cover name element not found');
        const userIdNode = document.createElement('span');
        userIdNode.innerHTML = `<span style="color:#fff; font-size:120%;">Facebook ID: ${userId}</span>`;
        coverName.parentNode.parentNode.append(userIdNode);
    } catch (exception) {
        console.error('Show user ID failed:', exception);
        alert('Showing Facebook user ID failed.\nSee console log for details.');
    }
}

function getUsername() {
    try {
        const nameElement = document.querySelector('span#fb-timeline-cover-name a');
        if (!nameElement) throw new Error('Username element not found');
        return nameElement.innerText.trim();
    } catch (exception) {
        console.error('Get username failed:', exception);
        return null;
    }
}

function getVanityName(userUrl) {
    try {
        if (!userUrl || typeof userUrl !== 'string') throw new Error('Invalid URL');
        const match = /facebook.com\/(.*?)\?/g.exec(userUrl);
        const name = match?.[1];
        if (name && !name.includes('profile.php')) return name;
        return null;
    } catch (exception) {
        console.error('Get vanity name failed:', exception);
        return null;
    }
}

function scrollTimeline() {