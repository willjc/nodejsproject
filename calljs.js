var fs= require('fs');
var getmm=require('getmime');
//var getmm = require('./node-modules/getmime');
getmm(fs,'.jpg',function(data){
    
    console.log(data);
})
