  
window.data = {}


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
    window.data[request.time] = request.value

    // var req = new XMLHttpRequest();

    // req.open('POST', 'http://localhost:8080/chromext/insertdb.php', true);
    // req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // req.send("url="+encodeURIComponent(request.time)+"&content="+encodeURIComponent(request.value));


 })
}, 3000);



chrome.browserAction.onClicked.addListener(function (tab) {
   sendCurrentUrl(tab.url);
});

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({url: 'popup.html'})
})
