const Helper = require('./helper');

const helper = new Helper()

helper.on('emitterCalled', function(arg){
    console.log('My emitted value',arg)
})

helper.testEmit('test emit')
