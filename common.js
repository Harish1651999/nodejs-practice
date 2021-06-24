// function myfunc(){
//     return `Hii`;
// }

// let handleFunc = () => {
//     return `Hey`
// }

// let updateFunc = function(){
//     return `Hello`        
// }

// module.exports = {myfunc, handleFunc, updateFunc};


// let helper = function(userName){
//     return `Logged in user ${userName}`
// }

// module.exports = helper

// 1.Events and emitter

const events = require('events');

const emitter = new events.EventEmitter;

emitter.on('emittercalled', function(arg){
    console.log("My emiiter value",arg)
})

emitter.emit('emittercalled',"emitted sucessfully");