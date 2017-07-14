const http = require("http")
const host = "127.0.0.1"
const port = 3000
const server=http.createServer( (request,response) =>{
	console.log(request.url);
  [_,op, a, b] = request.url.split("/");
  a = parseInt(a);
  b = parseInt(b);
 if(op=="add"){
	 result=a+b;
 }
 else if(op=="sub"){
	 result=a-b;
 }
  else if(op=="mul"){
	 result=a*b;
 }
  else if(op=="div"){
	 result=a/b;
 }
 response.statusCode = 200;
 response.setHeader('Content-type','text/plain');
 response.write(result.toString());
 response.end();
});

server.listen(port, host,()=>{
	console.log("started at port",port);
});
