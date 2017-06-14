const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = "3200";
const server = http.createServer((req,res) =>{
    //header creation
    res.writeHead(200,{'Content-type':'text/html'});
	
    //creating a readstream
    const readstream = fs.createReadStream(__dirname+"/contenttext.txt",'utf8');
    //add this stream to response using pipe
    readstream.pipe(res);
    
});

server.listen(port,hostname,()=>{
 	console.log("server started on port "+port);
});