/* 
* Author: Milan Chheda
* Description: Very simple JavaScript code that clears Chrome download bar every 30 seconds, when all downloads are complete.
*/

'use strict';

setInterval(chrome.browsingData.removeDownloads.bind(null, {}), 30000);
