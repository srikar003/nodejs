const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = "3200";
const server = http.createServer((req,res) =>{
    //header creation
    if(req.url === '/home'|| req.url ==='/')
    {
        res.writeHead(200,{'Content-type':'text/html'});

        //creating a readstream and adding response to pipe
        const readstream = fs.createReadStream(__dirname+"/htmlpage.html",'utf8').pipe(res);
    } 
    else if(req.url === '/data'){
        res.writeHead(200,{'Content-type':'text/plain'});
        const readstream = fs.createReadStream(__dirname+"/contenttext.txt",'utf8').pipe(res);
    }
    else if(req.url === '/admin'){
        res.writeHead(200,{'Content-type':'text/html'});
        const readstream = fs.createReadStream(__dirname+"/context.html",'utf8').pipe(res);
    }
    else{
        res.writeHead(404,{'Content-type':'text/html'});
        res.end('<html><body><h1>404:PAGE NOT FOUND</h1></body></html>');
    }
});

server.listen(port,hostname,()=>{
 	console.log("server started on port "+port);
});