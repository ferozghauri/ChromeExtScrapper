document.addEventListener('DOMContentLoaded', function () {
  const button = document.createElement('button')
  button.textContent="mybutton"
  document.body.appendChild(button)
  const bg = chrome.extension.getBackgroundPage()
  Object.keys(bg.bears).forEach(function (url) {
    
    //button.onclick=myFunction()
    
    
    const div = document.createElement('div')
    div.id="contentdiv"
    div.textContent = `${url}: ${bg.bears[url]}`
    document.body.appendChild(div)
  })



  document.querySelector('button').addEventListener('click', onclick, false)
  
  function onclick () {

    // chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
    //   chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
    // })
  }
  
  // function setCount (res) {
  //   const div = document.createElement('div')
  //   div.textContent = `${res.count} bears`
  //   document.body.appendChild(div)
  // }
}, false)