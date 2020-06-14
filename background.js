  
window.data = {}

  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    window.data[request.time] = [request.value_sell,request.value_buy]
 })


chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({url: 'popup.html'})
})
