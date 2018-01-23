var eventemitter=require('events');
var  event=new eventemitter.EventEmitter();
event.on("someevent",function(){
    console.log('may i help you sir?');
});

event.emit("someevent");
