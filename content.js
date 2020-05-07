
//const re = new RegExp('Trsdu(0.3s) Fw(b) Fz(36px) Mb(-4px) D(ib)', 'gi')
//const re = new RegExp('bear', 'gi')
//const matches = document.documentElement.innerHTML.match(re) || []

//<div class="My(6px) Pos(r) smartphone_Mt(6px)" data-reactid="29"><div class="D(ib) Va(m) Maw(65%) Ov(h)" data-reactid="30"><div class="D(ib) Mend(20px)" data-reactid="31"><span class="Trsdu(0.3s) Fw(b) Fz(36px) Mb(-4px) D(ib)" data-reactid="32">0.6413</span><span class="Trsdu(0.3s) Fw(500) Pstart(10px) Fz(24px) C($negativeColor)" data-reactid="33">-0.0007 (-0.1044%)</span><div id="quote-market-notice" class="C($tertiaryColor) D(b) Fz(12px) Fw(n) Mstart(0)--mobpsm Mt(6px)--mobpsm" data-reactid="34"><span data-reactid="35">As of  6:07PM BST. Market open.</span></div></div></div></div>
//const matches = '<span class="Trsdu(0.3s) Fw(b) Fz(36px) Mb(-4px) D(ib) Bgc($lightGreen) trendUp2" data-reactid="32">'+document.documentElement.innerHTML+'</span>'
//const data =document.getElementsByClass('Trsdu(0.3s) Fw(b) Fz(36px) Mb(-4px) D(ib)').innerHTML;

//------------------------
// var data;
// var a = document.getElementsByClassName('Fw(b)')

// for (let item of a)  
// { if(item.getAttribute('data-reactid') == 32 && item.tagName.toLowerCase() == 'span') 
//   { 
//     alert(item.innerHTML)
//     data = item.innerHTML } 
// }
	
// var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


// setInterval(() => {

//   chrome.runtime.sendMessage({
//     //url: window.location.href,
//     url: time,
//     content: data
    
//   })
// }, 300);


setInterval(() => {

  var data;
  var a = document.getElementsByClassName('Fw(b)')
  
  for (let item of a)  
  { if(item.getAttribute('data-reactid') == 32 && item.tagName.toLowerCase() == 'span') 
    { 
      //alert(item.innerHTML)
      data = item.innerHTML } 
  }
    
  var today = new Date();
  var time = ("0"+today.getHours()).slice(-2) + ":" +("0"+ today.getMinutes()).slice(-2) + ":" + ("0"+today.getSeconds()).slice(-2);

  
  chrome.runtime.sendMessage({
    //url: window.location.href,
    url: time,
    content: data
    
  })
}, 3000);


