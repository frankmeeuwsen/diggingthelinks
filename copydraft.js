const filelist = require('stats-filelist');
const arraySort = require('array-sort');
const dateObj={
  filename,
  properties
};
var sortedDateArray ='';

//find oldest article
function FindOldest(dir,callback){
  //lees map
  filelist.get(dir, function(list) {
    for(var i=0;i<list.length;i++){
      dateObj.filename = list [i].name
    };
  }, /\.md$/i);
  console.log('sorted: '+sortedDateArray);
}  //lees metainfo


  //zet oudste bestand in variabele

//rewrite datum naar nu

//publiceer post

//startup
FindOldest('./_draft/');
