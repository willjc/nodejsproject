var b= require ('./node-modules/getmime')
var fs=require('fs');
var path = require('path');
console.log(path.parse("http://www.baidu.com/a.css?aa99999"));
// fs.readFile('mime.json',function(error,data){
//     if(error){
//         return error;

//     }else{
//         console.log(typeof(data.toJSON()));
//        // console.log(data.toString());


//     }

// });
//console.log(b('.js'));
//console.log(b);
