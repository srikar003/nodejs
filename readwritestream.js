const fs = require('fs');

const readstream = fs.createReadStream(__dirname+"/contenttext.txt",'utf8');
            //if we dont specify utf8 encoding buffer occurs
const writestream = fs.createWriteStream(__dirname+"/displaycontext.txt");

 //create readstream inherits eventemitter with "data" event
 i=0;
 readstream.on('data',(chunk)=>{
    console.log("new chunk arrived:"+i++);
    writestream.write(chunk);
 });

 //this can also be done using pipes
 //readstream.pipe(writestream);
