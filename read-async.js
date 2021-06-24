const fs = require('fs');

// console.log("1")

// fs.readFile('readme.txt','utf-8',function(err,data){
//     console.log(data)
// })

// console.log("2")

fs.unlink('write.txt', (err) => {
    console.log(err)
})