
setInterval(() => {

  // var value;
  // var a = document.getElementsByClassName('Fw(b)')
  
  // for (let item of a)  
  // { if(item.getAttribute('data-reactid') == 32 && item.tagName.toLowerCase() == 'span') 
  //   { 
  //     value = item.innerHTML } 
  //   }

  var value_sell;
  var value_buy;

  var a = document.getElementsByClassName('tv-trading-toolbar__bs-button tv-trading-toolbar__bs-button--sell apply-common-tooltip')

  var b = document.getElementsByClassName('tv-trading-toolbar__bs-button tv-trading-toolbar__bs-button--buy apply-common-tooltip')

  for (let item of a)  
  {value_sell=item.textContent.toLowerCase().replace('sell','')} 
  
  for (let item of b)  
  {value_buy=item.textContent.toLowerCase().replace('buy','')} 

    
  // var today = new Date();
 
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  var time = ("0"+today.getHours()).slice(-2) + ":" +("0"+ today.getMinutes()).slice(-2) + ":" + ("0"+today.getSeconds()).slice(-2);
  var date_time = dd+"-"+mm+"-"+yyyy+"  "+ time;
  //today = mm + '/' + dd + '/' + yyyy;
  
  chrome.runtime.sendMessage({
    time: time,
    value_sell: value_sell,
    value_buy: value_buy
    
  })


    var req = new XMLHttpRequest();

    req.open('POST', 'https://paladin2020.net/insertdb.php', true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send("url="+encodeURIComponent(date_time)+"&sellvalue="+encodeURIComponent(value_sell)+"&buyvalue="+encodeURIComponent(value_buy));


}, 5000);


