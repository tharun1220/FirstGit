const http = require('http')
const server = http.createServer((req,res) =>{
    console.log('Hi Tharun')
});
server.listen(4000)