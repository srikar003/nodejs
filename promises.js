var Promise = require('promise');
var fs = require('fs');
var http=require('http');
const hostname = '127.0.0.1';
const port = "3200";

var promise = new Promise(function (resolve, reject) {
  fs.readFile('displaycontext.txt','utf8',function(err,data){
    if (err){
        reject(err);
    }
    else{
        resolve(data);
    }
  });
});
promise.then(function(fromResolve){
    const server = http.createServer((req,res) =>{

	//setting header and status code
	res.statusCode = 200;
	res.setHeader('Content-type','text/text');

	//another way of setting status code and header
	//res.writeHead(200,{'Content-type':'text/html'});

	res.write(fromResolve);
	res.end();
});

server.listen(port,hostname,()=>{
 	console.log("server started on port "+port);
});
}).catch(function(fromReject){
    console.log(fromReject);
});
