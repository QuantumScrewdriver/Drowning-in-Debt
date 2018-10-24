//import exceljs from 'exceljs';

function setRent(){
    var x = document.getElementById("divx").textContent;
    if(x == "Hello World!"){
        document.getElementById("div1").innerHTML = "ACCOMPLISHED";
    }
    // var para = document.createElement("p");
    // var node = document.createTextNode("This is new.");
    // para.appendChild(node);
    // var element = document.getElementById("div1");
    // element.appendChild(para);
    // var Excel = require('exceljs');
    // var workbook = new Excel.Workbook(); 
    // workbook.xlsx.readFile("ACS_17_1YR_DP04/ACS_17_1YR_DP04_with_ann.xlsx").then(function() {
    //     var worksheet = workbook.getWorksheet(ACS_17_1YR_DP04_with_ann);
    //     var row = worksheet.getRow(5);
    //     var para = document.createElement("p");
    //     var node = document.createTextNode("This is new.");
    //     para.appendChild(node);

    //     var element = document.getElementById("div1");
    //     element.appendChild(para);
    //     // worksheet.eachRow({ includeEmpty: true }, function(row, rowNumber) {
    //     // console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));
    //     // });
    // });
}