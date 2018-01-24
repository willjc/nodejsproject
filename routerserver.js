var http=require('http');
var router= require('router');
var urlurl=require('url');
var ejs=require('ejs');
//console.log(ejs);

http.createServer(function(req,res){
 var routername =  urlurl.parse(req.url).pathname.replace('/','');
 var method=req.method;
 res.writeHead(200,"Content-Type:text/html;chaset='utf-8'");
 if(routername=='login'){
    var arra=[111,222,333,444,999,555];
     //ejs.renderFile是渲染模板文件，第一个参数是模板的目录 第二个参数是传入的数据，第三个是回调
     //函数，会返回渲染之后的页面，直接用res.end(data) 就可以看到
     ejs.renderFile('views/login.ejs',{msg:'helloworld',arr:arra},function(error,data){
            res.end(data);
     })
    res.end('this is login page');
 }else if(routername=='register'){
    res.end('this is register page');
 }else if(routername=='dologin' && method=='GET'){
        console.log(urlurl.parse(req.url,true).query.name)
 }else if(routername=='dologin' && method=='POST'){
        var formdata='';    
    req.on('data',function(chunk){
            formdata+=chunk;
        });
    req.on('end',function(){
       // req.query=formdata;
        console.log(formdata);
       console.log(req.url);
    });
 }else{
     res.end('this is else page');
 }
}).listen(8001);