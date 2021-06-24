const EventEmitter = require('events');

class Helper extends EventEmitter{

    testEmit(params){
        
        console.log(params);

        this.emit('emitterCalled','emitted Successfully')
    }
}

module.exports = Helper
