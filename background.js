  
window.data = {}
setInterval(() => {
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    window.data[request.time] = request.value
 })
}, 3000);

// chrome.browserAction.onClicked.addListener(function (tab) {
//    sendCurrentUrl(tab.url);
// });

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({url: 'popup.html'})
})
