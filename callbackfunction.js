var fs=require('fs');

var af= function(a,callback){
        var res='';
    setTimeout(function(){
        res='这是请求的数据'+a;
        callback(res);

    }, 200);
  // return res;
  //  callback(res);

}
af('abc',function(data){
    console.log(data);
});

