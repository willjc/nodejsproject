//var fs= ('fs');
var http=require('http');
var fs=require('fs');
var path = require('path');
var urlurl = require('url');
var getmm=require('./node-modules/getmime');

http.createServer(function(req,res){
    //req中带的 请求的url的地址
    var url =req.url;
    //后缀名
    //urlurl.parse(url)
   // console.log(urlurl.parse(url));
   //console.log(urlurl.parse(url).pathname); 
   
   var pathextname=path.parse(urlurl.parse(url).pathname).ext;
    //console.log(pathextname);
  
   var leixing='';
   var jsonobj={};

    if(url=='/'){ url='/index.html'; };
    
    if(url!='/favicon.ico'){
        console.log(url);
        
        fs.readFile('html'+url,function(error,data){
                //console.log(url);
                if(error){
                    fs.readFile("html/404.html",function(error,data404){
                        res.writeHead(404,{"Content-Type":"text/html;charset='utf-8'"});
                        res.write(data404).toString();
                        res.end();
                    });
                  
                }else{
                        console.log(pathextname);
                        getmm(fs,pathextname,function(extn){
                            console.log(extn);
                            res.writeHead(200,{"Content-type":""+extn+";charset='utf-8'"});
                            res.write(data);
                            res.end();
                        });
                    
                    
                }
                
        })

    }
    
    
    
}).listen(8000);