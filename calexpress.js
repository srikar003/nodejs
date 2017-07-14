const express = require('express')
const app = express()
app.get('/:op/:a/:b', function (req, res) {
a = parseInt(req.params.a);
  b = parseInt(req.params.b);
  op=req.params.op;
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
	 if(b!=0){
	 result=a/b;
	 }
	else{
	  result="you entered the divisor as 0";
  }
 }
  res.send(result.toString())
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
