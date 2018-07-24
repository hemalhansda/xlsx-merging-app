
setTimeout(function(){

  let newSheet = mysheet;
  let flag = 2;
  let fl = 2;
  let start = mysheet.length;
  let end = mysheet.length+mysheet2.length;
  //console.log('start: ' + start + 'end: ' + end);

  let error;
  let duplicate;
  var i = start;
  for(var k=0;k<mysheet.length;k++){
    for(var j=0;j<mysheet2.length;j++){
      //console.log('mysheet: ', mysheet2[k].Email);
      if(mysheet[k].Email === mysheet2[j].Email){
        flag = 1;
        if(fl === 2){
          error = `Email: "${mysheet2[j].Email}" is already exist, so can't merge it from sheet2!`;
          duplicate = `${mysheet2[j].Name} have a duplicate Email Id's`
          //console.log(error);
          fl = 1;
        }
      }
    }
    if(flag === 2){
      //console.log('un: ', mysheet[i]);
      newSheet[i] = mysheet2[k];
      i++;
      //console.log('new: ', newSheet[i]);
    }
    flag = 2;
  }

  var i;
  for(i=0;i<newSheet.length;i++){
  var template = jQuery('#notifiTemplate2').html();
  //console.log('this is my sheet', mysheet);
  var html = Mustache.render(template, {
         Serial: newSheet[i].Serial_No,
         Name: newSheet[i].Name,
         Company: newSheet[i].Company_Name,
         Email: newSheet[i].Email,
         Phone: newSheet[i].Phone_No
  });

  jQuery('#sheet').append(html);
  }

  var template2 = jQuery('#errorTemplate').html();
  var html2 = Mustache.render(template2, {
         errorReason: error
  });

  jQuery('#errorReason').append(html2);

  var template3 = jQuery('#duplicateTemplate').html();
  var html3 = Mustache.render(template3, {
         duplicateReason: duplicate
  });

  jQuery('#duplicateReason').append(html3);

  //console.log('this is  newsheet', newSheet);
}, 3000);
