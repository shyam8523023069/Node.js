// console.log('Hello Node')
// console.log('Process', process)

const {sum}= require("./healper")

const total =sum(3, 9)
console.log("Total sum value", total)

const http = require("http")

const server = http.createServer((req, res)=> {
    res.end('hello world from node.js ')
} )
server.listen(3000)