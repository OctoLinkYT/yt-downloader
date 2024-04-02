// ==UserScript==
// @name         YouTube Download Shortcut
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Press Alt + D to download the video by modifying the URL
// @author       Your Name
// @match        https://www.youtube.com/watch*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to open the video in a new tab with "vvv" added to the URL
    function openDownloadLink() {
        let currentURL = window.location.href;
        let downloadURL = currentURL.replace("youtube", "youtubevvv");
        window.open(downloadURL, '_blank');
    }

    // Add event listener to detect Alt + D keypress
    document.addEventListener('keydown', function(event) {
        if (event.altKey && event.key === 'd') {
            openDownloadLink();
        }
    });
})();
