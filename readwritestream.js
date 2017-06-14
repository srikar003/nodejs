const fs = require('fs');

const readstream = fs.createReadStream(__dirname+"/context.html",'utf8');
            //if we dont specify utf8 encoding buffer occurs
const writestream = fs.createWriteStream(__dirname+"/displaycontext.html");

 //create readstream inherits eventemitter with "data" event
 readstream.on('data',(chunk)=>{
    console.log("new chunk arrived:");
    writestream.write(chunk);
 });