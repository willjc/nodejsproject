//var fs= ('fs');
var http=require('http');
var router= require('router');

http.createServer(function(req,res){
    router(req,res,'html')

    // var url =req.url;
    // var pathextname=path.parse(urlurl.parse(url).pathname).ext;
    // if(url=='/'){ url='/index.html'; };
    // if(url!='/favicon.ico'){
    //     fs.readFile('html'+url,function(error,data){
    //             //console.log(url);
    //             if(error){
    //                 fs.readFile("html/404.html",function(error,data404){
    //                     res.writeHead(404,{"Content-Type":"text/html;charset='utf-8'"});
    //                     res.write(data404);
    //                     res.end();
    //                 });
                  
    //             }else{
    //                     getmm(fs,pathextname,function(extn){
    //                         console.log(extn);
    //                         res.writeHead(200,{"Content-type":""+extn+";charset='utf-8'"});
    //                         res.write(data);
    //                         res.end();
    //                     });
                    
                    
    //             }
                
    //     })

    // }
    
    
    
}).listen(8001);