//var fs = require('fs');
var a= function(fs,pathname,callback){
    fs.readFile('./mime.json',function(err,data){
        var datastring=JSON.parse(data.toString());
          var exen=datastring[pathname];

            callback(exen);

    });
    
}

module.exports=a;