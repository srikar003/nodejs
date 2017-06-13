const http = require('http');

const hostname = 'localhost';
const port = "3200";

const server = http.createServer((req,res) =>{
	res.statusCode = 200;
	res.setHeader('Content-type','text/plain');
	res.end("server created!!!");
});

server.listen(port,hostname,()=>{
	console.log("server started on port "+port);
});