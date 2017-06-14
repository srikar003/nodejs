const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = "3200";
fs.readFile('context.html',(err,data)=>{
	if(err){
		throw err;
	}
	const server = http.createServer((req,res) =>{

	//to see the url requested
	console.log("requested url is "+req.url);

	//setting header and status code
	res.statusCode = 200;
	res.setHeader('Content-type','text/html');

	//another way of setting status code and header
	//res.writeHead(200,{'Content-type':'text/html'});

	res.write(data);
	res.end();
});

server.listen(port,hostname,()=>{
 	console.log("server started on port "+port);
});

});