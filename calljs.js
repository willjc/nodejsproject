var fs= require('fs');
var getmm = require('./node-modules/getmime');
getmm(fs,'/img/fourth-portfolio-item.jpg',function(data){
    
    console.log(data);
})