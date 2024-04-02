// ==UserScript==
// @name         YouTube Download Shortcut
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Press Alt + D to download the video by modifying the URL
// @author       Your Name
// @match        https://www.youtube.com/watch*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function openDownloadLink() {
        let currentURL = window.location.href;
        let downloadURL = currentURL.replace("youtube", "youtubevvv");
        window.open(downloadURL, '_blank');
    }

    document.addEventListener('keydown', function(event) {
        if (event.altKey && event.key === 'd') {
            openDownloadLink();
        }
    });
})();
