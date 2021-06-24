// var http = require('http');

// var fs = require('fs');

// var server = http.createServer( function(req, res) {
//     var stream = fs.createReadStream(__dirname + '/data.txt')
//     stream.pipe(res);
// })

// server.listen(5000);

const fs = require('fs');

// var data = "Hello Fabevy People";

// var writeStream = fs.createWriteStream('stream.txt');

// writeStream.write(data, "utf-8");

// writeStream.end();

// writeStream.on('done', function(){
//     console.log("Read Completed")
// })

// writeStream.on('error',function(err){
//     console.log(err.stack)
// })

var readStream = fs.ReadStream('data1.txt');

readStream.on('done', function(){
    console.log("Read Completed")
})

readStream.on('error',function(err){
    console.log(err.stack)
})

console.log("Program Ended")