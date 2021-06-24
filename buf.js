// const buf = Buffer.from('Hey')

// console.log(buf);

const buf1 = Buffer.alloc(256)

const len = buf1.write('It is really a buffer');

console.log([buf1]);

console.log(" octets string "+ len)

console.log(buf1.toString())