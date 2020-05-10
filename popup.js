document.addEventListener('DOMContentLoaded', function () {


  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  document.getElementById("spacing").style="height:25px"
  const button = document.createElement('button')
  button.textContent="Download Data In Excel";
  button.type="button";
  button.className="btn btn-primary";
  //button.onclick=myfunction();
  document.getElementById("content_container").appendChild(button)
  const bg = chrome.extension.getBackgroundPage()

  Object.keys(bg.data).forEach(function (url) {
    
    //button.onclick=myFunction()
    
    
    // const div = document.createElement('div')
    // div.id="contentdiv"
    // //var time_ = `${url}`;
    // div.textContent = `${url}: ${bg.data[url]}`
    // document.getElementById("content_container").appendChild(div)

    const tr = document.createElement('tr');
    const date_value = document.createElement('td');
    date_value.textContent = dd+ '-' + mm+ '-' + yyyy;
    tr.appendChild(date_value);
    const time_value = document.createElement('td');
    time_value.textContent=`${url}`;
    tr.appendChild(time_value);
    const value_value = document.createElement('td');
    value_value.textContent=`${bg.data[url]}`;
    tr.appendChild(value_value);
document.getElementById("table_body").appendChild(tr);



    //document.body.appendChild(div)

    // var req = new XMLHttpRequest();

    // req.open('POST', 'http://localhost:8080/chromext/insertdb.php', true);
    // req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // req.send("url="+encodeURIComponent(`${url}`)+"&content="+encodeURIComponent(`${bg.bears[url]}`));



  })

  document.querySelector('button').onclick=function() {myfunction()};
  function myfunction(){

    // var blob = new Blob(["Welcome to Websparrow.org."],
    //             { type: "text/plain;charset=utf-8" });
    //         saveAs(blob, "static.txt");
    var DataInJSON = [];
    var todaysDate = new Date();
    //var file_name_by_date = todaysDate.getFullYear()+todaysDate.getMonth();//+todaysDate.getDate()+todaysDate.getHours();

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var time = ("0"+today.getHours()).slice(-2) + ("0"+ today.getMinutes()).slice(-2) + ("0"+today.getSeconds()).slice(-2);

    today = mm + '/' + dd + '/' + yyyy;

    var data_string;
    var count_=0;
    Object.keys(bg.data).forEach(function (url) {

      data_string=data_string+`${url}: ${bg.data[url]}`+"\n";
      count_++

      var obj = { 
        Date: dd+ '-' + mm+ '-' + yyyy,
        Time:`${url}` ,
        Value: `${bg.data[url]}`
    };
    DataInJSON.push(obj);


    })
    alert(JSON.stringify(DataInJSON));

    JSONToCSVConvertor(DataInJSON,yyyy+mm+dd+time,true)
  }


  

  
  // function setCount (res) {
  //   const div = document.createElement('div')
  //   div.textContent = `${res.count} bears`
  //   document.body.appendChild(div)
  // }







  function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    
    var CSV = 'sep=,' + '\r\n\n';

    //This condition will generate the Label/Header
    if (ShowLabel) {
        var row = "";
        
        //This loop will extract the label from 1st index of on array
        for (var index in arrData[0]) {
            
            //Now convert each value to string and comma-seprated
            row += index + ',';
        }

        row = row.slice(0, -1);
        
        //append Label row with line break
        CSV += row + '\r\n';
    }
    
    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
        var row = "";
        
        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }

        row.slice(0, row.length - 1);
        
        //add a line break after each row
        CSV += row + '\r\n';
    }

    if (CSV == '') {        
        alert("Invalid data");
        return;
    }   
    
    //Generate a file name
    var fileName = "ValueReport_";
    //this will remove the blank-spaces from the title and replace it with an underscore
    fileName += ReportTitle.replace(/ /g,"_");   
    
    //Initialize file format you want csv or xls
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
    
    // Now the little tricky part.
    // you can use either>> window.open(uri);
    // but this will not work in some browsers
    // or you will not get the correct file extension    
    
    //this trick will generate a temp <a /> tag
    var link = document.createElement("a");    
    link.href = uri;
    
    //set the visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    
    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}



}, false)