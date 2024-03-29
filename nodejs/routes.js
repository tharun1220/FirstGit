const fs = require('fs');

const requestHandler = (req, res) =>{
    const url = req.url;
    const method = req.method;
    if(url === '/')
    {
        return fs.readFile('message.txt', { encoding: 'utf-8' }, (err, data) =>{
            if(err)
            {
                console.log(err);
            }
            console.log(data)
            res.write('<html>');
            res.write('<head><title>Enter message</title></head>');
            res.write(`<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`);
            res.write(`<body>${data}</body>`);
            res.write('</html>');
            return res.end();
        });
    }
    
    else if(url === '/message' && method === 'POST')
    {
        const body = [];
        req.on('data',(chunk) =>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end',() =>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) =>{
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title> My First page </title></head>')
    res.write('<body><h1> Welcome to my Node Js project </h1></body>')
    res.write('</html>')
    res.end();
}

//module.exports = requestHandler;

//module.exports = {
//    handler: requestHandler,
//    someText: 'some hard coded text'
//}

// module.exports.handler = requestHandler;
// module.exports.someText = 'some hard coded text';

exports.handler = requestHandler;
exports.someText = 'some hard coded text';