const express=require('express')
const app=express()
const fs=require('fs')
i=0
const bodyParser=require('body-parser')
app.use(express.static(__dirname+"/html"));
app.use(bodyParser.urlencoded({extended:true}))
const timelogger=(req,res,next)=>{
	i++
	console.log("logged in for time ",i);
	next()
}
app.post('/',(req,res)=>{
	let content=req.body.text1;
	fs.appendFIle('newfile.txt',content,(err)=>{
		if(err)
			console.error(err);
	})
});
app.get('/content',timelogger,(req,res)=>{
	fs.readFile('newfile.txt',(data,err)=>{
	if(err)
		console.error(err);
	else
		res.send(data);
	})
});
app.listen(3200);