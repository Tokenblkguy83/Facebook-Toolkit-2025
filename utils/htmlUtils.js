function scrollTimeline() {
    try {
        const timeline = document.querySelector('[role="feed"]');
        if (!timeline) throw new Error('Timeline not found');
        const distance = 1000;
        const delay = CONFIG.SCROLL_DELAY;
        let lastHeight = timeline.scrollHeight;
        const scroll = () => {
            window.scrollBy(0, distance);
            setTimeout(() => {
                const newHeight = timeline.scrollHeight;
                if (newHeight !== lastHeight) {
                    lastHeight = newHeight;
                    scroll();
                } else {
                    window.scrollTo(0, 0);
                    alert('Scrolling completed.');
                }
            }, delay);
        };
        scroll();
    } catch (exception) {
        console.error('Scroll timeline failed:', exception);
        alert('Scrolling timeline failed.\nSee console log for details.');
    }
}

function expandTimeline() {
    try {
        const buttons = document.querySelectorAll('div[role="button"]');
        buttons.forEach(button => {
            if (button.innerText.includes('See more')) {
                button.click();
            }
        });
        alert('Expanding completed.');
    } catch (exception) {
        console.error('Expand timeline failed:', exception);
        alert('Expanding timeline failed.\nSee console log for details.');
    }
}

async function extractFriends() {
    try {
        const friends = [];
        const friendElements = document.querySelectorAll('div[data-testid="friend_list_item"]');
        friendElements.forEach(friendElement => {
            const nameElement = friendElement.querySelector('a');
            const name = nameElement?.innerText.trim();
            const link = nameElement?.href;
            if (name && link) {
                friends.push({ name, link });
            }
        });
        return { list: friends };
    } catch (exception) {
        console.error('Extract friends failed:', exception);
        throw new Error('Extracting friends failed.\nSee console log for details.');
    }
}

async function downloadPhotos() {
    try {
        const photos = [];
        const photoElements = document.querySelectorAll('img[src*="scontent"]');
        photoElements.forEach(photoElement => {
            const src = photoElement.src;
            if (src) {
                photos.push(src);
            }
        });
        return photos;
    } catch (exception) {
        console.error('Download photos failed:', exception);
        throw new Error('Downloading photos failed.\nSee console log for details.');
    }
}

function clearTimeline() {
    try {
        const unwantedElements = document.querySelectorAll('div[data-pagelet^="FeedUnit_"]');
        unwantedElements.forEach(element => {
            element.remove();
        });
        alert('Clearing timeline completed.');
    } catch (exception) {
        console.error('Clear timeline failed:', exception);
        alert('Clearing timeline failed.\nSee console log for details.');
    }
}
