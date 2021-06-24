// const http = require('http')

// const server = http.createServer( (req, res) => {
//     res.writeHead(200, {'Content-Type':'text/plain'});
//     res.end('Hi I am Nodejs')
// })

// console.log("I am running on nodejs 3000")

// server.listen(3000, '127.0.0.1')


const http = require('http')

const server = http.createServer( (req, res) => {
    
    if(req.url === '/'){
        res.write("Hello world")
        res.end()
    }

    if(req.url === '/api'){
        res.write(JSON.stringify([1,2,3,4]))
        res.end()
    }

    if(req.url === '/myproducts'){
        res.write(JSON.stringify({'item' : 'product1'}))
        res.end()
    }

})

console.log("I am Nodejs")

server.listen(3000, '127.0.0.1')


