const http = require('http');

const hostname = '127.0.0.1';
const port = "3200";

const server = http.createServer((req,res) =>{
	res.statusCode = 200;
	res.setHeader('Content-type','text/plain');
	res.end(`${2+3}`);
});

server.listen(port,hostname,()=>{
	console.log("server started on port "+port);
});