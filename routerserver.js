var http=require('http');
var router= require('router');
var urlurl=require('url');
var ejs=require('ejs');
console.log(ejs);

http.createServer(function(req,res){
 var routername =  urlurl.parse(req.url).pathname.replace('/','');
 if(routername=='login'){
     //ejs.renderFile是渲染模板文件，第一个参数是模板的目录 第二个参数是传入的数据，第三个是回调
     //函数，会返回渲染之后的页面，直接用res.end(data) 就可以看到
     ejs.renderFile('views/login.ejs',{},function(error,data){
            res.end(data);
     })
    res.end('this is login page');
 }else if(routername=='register'){
    res.end('this is register page');
 }else{
     res.end('this is else page');
 }
}).listen(8001);