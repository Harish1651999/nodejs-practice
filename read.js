const fs = require('fs');

console.log("1");

const value = fs.readFileSync('readme.txt', "utf-8");

console.log("2");

console.log(value);

fs.writeFileSync('write.txt',value);

console.log("3");