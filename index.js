var http=require('http');
var router= require('router');

http.createServer(function(req,res){
    router(req,res,'html')   
}).listen(8001);