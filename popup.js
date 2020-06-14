document.addEventListener('DOMContentLoaded', function () {

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  document.getElementById("spacing").style="height:25px"
  const button = document.createElement('button')
  button.textContent="Download Data In Excel";
  button.type="button";
  button.className="btn btn-primary";
  document.getElementById("content_container").appendChild(button)

  //get background object
  const bg = chrome.extension.getBackgroundPage()

  Object.keys(bg.data).forEach(function (url) {

    const tr = document.createElement('tr');

    const date_value = document.createElement('td');
    date_value.textContent = dd+ '-' + mm+ '-' + yyyy;
    tr.appendChild(date_value);

    const time_value = document.createElement('td');
    time_value.textContent=`${url}`;
    tr.appendChild(time_value);

    const value_value_sell = document.createElement('td');
    value_value_sell.textContent=`${bg.data[url][0]}`;
    tr.appendChild(value_value_sell);

    const value_value_buy = document.createElement('td');
    value_value_buy.textContent=`${bg.data[url][1]}`;
    tr.appendChild(value_value_buy);

    document.getElementById("table_body").appendChild(tr);

  })

  document.querySelector('button').onclick=function() {myfunction()};
  function myfunction(){
    
    var DataInJSON = [];

    var todaysDate = new Date();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
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


    });

    JSONToCSVConvertor(DataInJSON,yyyy+mm+dd+time,true)
  }

  function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    
    var CSV = 'sep=,' + '\r\n\n';
    if (ShowLabel) {
        var row = "";
        
        for (var index in arrData[0]) {
            
            row += index + ',';
        }

        row = row.slice(0, -1);
        
        CSV += row + '\r\n';
    }
    for (var i = 0; i < arrData.length; i++) {
        var row = "";
        for (var index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }

        row.slice(0, row.length - 1);
        CSV += row + '\r\n';
    }

    if (CSV == '') {        
        alert("Invalid data");
        return;
    }   
    var fileName = "ValueReport_";
    fileName += ReportTitle.replace(/ /g,"_");   
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
    var link = document.createElement("a");    
    link.href = uri;
    
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}



}, false)