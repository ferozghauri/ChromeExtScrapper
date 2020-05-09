document.addEventListener('DOMContentLoaded', function () {
  const button = document.createElement('button')
  button.textContent="mybutton"
  //button.onclick=myfunction();
  document.body.appendChild(button)
  const bg = chrome.extension.getBackgroundPage()
  
  Object.keys(bg.data).forEach(function (url) {
    
    //button.onclick=myFunction()
    
    
    const div = document.createElement('div')
    div.id="contentdiv"
    //var time_ = `${url}`;
    div.textContent = `${url}: ${bg.data[url]}`
    document.body.appendChild(div)

    // var req = new XMLHttpRequest();

    // req.open('POST', 'http://localhost:8080/chromext/insertdb.php', true);
    // req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // req.send("url="+encodeURIComponent(`${url}`)+"&content="+encodeURIComponent(`${bg.bears[url]}`));



  })


  document.querySelector('button').onclick=function() {myfunction(bg)};
  function myfunction(arg){
    var data_string;
    var count_=0;
    Object.keys(bg.data).forEach(function (url) {

      data_string=data_string+`${url}: ${bg.data[url]}`;
      count_++
    })
    alert(count_);
  }


  

  
  // function setCount (res) {
  //   const div = document.createElement('div')
  //   div.textContent = `${res.count} bears`
  //   document.body.appendChild(div)
  // }
}, false)