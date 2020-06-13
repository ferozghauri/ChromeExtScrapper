
setInterval(() => {

  var value;
  var a = document.getElementsByClassName('Fw(b)')
  
  for (let item of a)  
  { if(item.getAttribute('data-reactid') == 32 && item.tagName.toLowerCase() == 'span') 
    { 
      value = item.innerHTML } 
    }
    
  var today = new Date();
  var time = ("0"+today.getHours()).slice(-2) + ":" +("0"+ today.getMinutes()).slice(-2) + ":" + ("0"+today.getSeconds()).slice(-2);

  
  chrome.runtime.sendMessage({
    time: time,
    value: value
    
  })


    var req = new XMLHttpRequest();

    req.open('POST', 'http://localhost:8080/chromext/insertdb.php', true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send("url="+encodeURIComponent(time)+"&content="+encodeURIComponent(value));


}, 5000);


