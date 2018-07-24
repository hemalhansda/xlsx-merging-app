var url = "sheet.xlsx";
let mysheet;

/* set up async GET request */
var req = new XMLHttpRequest();
req.open("GET", url, true);
req.responseType = "arraybuffer";

req.onload = function(e) {

  var data = new Uint8Array(req.response);
  var workbook = XLSX.read(data, {type:"array"});

  var first_sheet_name = workbook.SheetNames[0];
  var address_of_cell = 'A1';

  var worksheet = workbook.Sheets[first_sheet_name];
  mysheet = XLSX.utils.sheet_to_json(worksheet);
  //console.log(mysheet[0].Serial_No);

}
req.send();
