import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import XLSX from 'xlsx';



// import * as Excel from 'exceljs/dist/es5/xlsx/xlsx.js';
//
// var workbook = new Excel.Workbook();
// var worksheet = workbook.addWorksheet('Discography');
//
// // add column headers
// worksheet.columns = [
//     { header: 'Album', key: 'album'},
//     { header: 'Year', key: 'year'}
// ];
//
// // add row using keys
// worksheet.addRow({album: "Taylor Swift", year: 2006});
//
// // add rows the dumb way
// worksheet.addRow(["Fearless", 2008]);
//
// // add an array of rows
// var rows = [
//   ["Speak Now", 2010],
//   {album: "Red", year: 2012}
// ];
// worksheet.addRows(rows);
//
// // edit cells directly
// worksheet.getCell('A6').value = "1989";
// worksheet.getCell('B6').value = 2014;
//
// // save workbook to disk
// workbook.xlsx.writeFile('taylor_swift.xlsx').then(function() {
//   console.log("saved");
// });


// const workbook = new Excel.Workbook();
//
// workbook.creator = 'Me';
// workbook.lastModifiedBy = 'Her';
// workbook.created = new Date(1985, 8, 30);
// workbook.modified = new Date();
// workbook.lastPrinted = new Date(2016, 9, 27);
//
// workbook.views = [
//   {
//     x: 0, y: 0, width: 10000, height: 20000,
//     firstSheet: 0, activeTab: 1, visibility: 'visible'
//   }
// ]
//
// var sheet = workbook.addWorksheet('My Sheet', {properties:{tabColor:{argb:'FFC0000'}}});
//
// workbook.eachSheet(function(worksheet, sheetId) {
//     // ...
// });
//
// // fetch sheet by name
// var worksheet = workbook.getWorksheet('My Sheet');
// worksheet.columns = [
//     { header: 'Id', key: 'id', width: 10 },
//     { header: 'Name', key: 'name', width: 32 },
//     { header: 'D.O.B.', key: 'DOB', width: 10, outlineLevel: 1 }
// ];
// var idCol = worksheet.getColumn('id');
// var nameCol = worksheet.getColumn('B');
// var dobCol = worksheet.getColumn(3);
// worksheet.addRow({id: 1, name: 'John Doe', dob: new Date(1970,1,1)});
// worksheet.addRow({id: 2, name: 'Jane Doe', dob: new Date(1965,1,7)});
// console.log(worksheet);



// workbook.xlsx.readFile('sheet-1.xlsx')
//     .then(function() {
//
//     });
// console.log(workbook);
//
// var idCol = workbook.getColumn('Name');
// console.log(idCol);

// var inboundWorkbook = new Excel.Workbook();
// inboundWorkbook.xlsx.readFile('./sheet-1.xlsx').then(function() {
//    var inboundWorksheet = inboundWorkbook.getWorksheet(1); //or name of the worksheet
//    inboundWorksheet.eachRow({ includeEmpty: true }, function(row, rowNumber) {
// 	console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));
//    });
// });
// console.log(inboundWorkbook);
ReactDOM.render(<h1>Excel Sheet Merging Application</h1>, document.getElementById('app'));
