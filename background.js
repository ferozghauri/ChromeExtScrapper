  
window.bears = {}


// var req = new XMLHttpRequest();
// req.addEventListener('readystatechange', function (evt) {
//   if (req.readyState === 4) {
//     if (req.status === 200) {
//       alert('Saved !');
//     } else {
//       alert("ERROR: status " + req.status);
//     }
//   }
// });
// req.open('POST', 'http://localhost:8080/chromext/insertdb.php', true);
// req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// req.send('feroz');



setInterval(() => {
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    window.bears[request.url] = request.content
    var req = new XMLHttpRequest();
// req.addEventListener('readystatechange', function (evt) {
//   if (req.readyState === 4) {
//     if (req.status === 200) {
//       alert('Saved !');
//     } else {
//       alert("ERROR: status " + req.status);
//     }
//   }
// });
req.open('POST', 'http://localhost:8080/chromext/insertdb.php', true);
req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
req.send("url="+encodeURIComponent(request.url)+"&content="+encodeURIComponent(request.content));


 })
}, 3000);


function sendCurrentUrl(url) {

}

chrome.browserAction.onClicked.addListener(function (tab) {
   sendCurrentUrl(tab.url);
});

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({url: 'popup.html'})
})
