var url2 = "sheet2.xlsx";
var mysheet2;

/* set up async GET request */
var req2 = new XMLHttpRequest();
req2.open("GET", url2, true);
req2.responseType = "arraybuffer";

req2.onload = function(e) {
  var data2 = new Uint8Array(req2.response);
  var workbook2 = XLSX.read(data2, {type:"array"});

  var first_sheet_name2 = workbook2.SheetNames[0];
  var address_of_cell2 = 'A1';

  var worksheet2 = workbook2.Sheets[first_sheet_name2];
  mysheet2 = XLSX.utils.sheet_to_json(worksheet2);
  //console.log(mysheet2[0]);
}

req2.send();
