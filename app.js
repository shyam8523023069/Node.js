// console.log('Hello Node')
// console.log('Process', process)

// const {sum}= require("./healper")

// const total =sum(3, 9)
// console.log("Total sum value", total)

// const http = require("http")

// const server = http.createServer((req, res)=> {
//     res.end('hello world from node.js ')
// } )
// server.listen(3000)

// const express = require('express');

// const app = express();
// app.get('/', (req, res) => {
//     res.send('Hey this is from express.js')
// } )
// app.listen(3000)

// Event looping---------------------------------------
// const fs = require('fs')
// const fileName = 'file.txt';
// fs.watch(fileName, ()=> console.log('file changed now....!') )

// const fs =require('fs')
// const fileName = 'file.txt';
// fs.readFile(fileName, (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString())
// } )
// console.log('Hello this is Asynchronous Programming....!')

// const fs = require('fs');
// const fileName = "file.txt";

// const data = fs.readFileSync(fileName)
// console.log(data.toString())
// console.log('Hello this is an synchronous Programming....')

const fs = require ('fs')
const fileName = 'file.txt';
const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString())
fs.readFile(fileName, (err, data) => {
    if(err){
        errHandler(err)
    }
    dataHandler(data)

} )

console.log('nOde js functional approach')