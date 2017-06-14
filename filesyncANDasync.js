const fs = require('fs');

//file using asynchronous feature
console.log(fs.readFileSync('context.html','utf8'));

//the below statement is removing the content in html file and adding the provided data
//fs.writeFileSync('context.html',"<!-- it is a html file-->");

console.log("srikar003");

fs.writeFileSync('display.txt',"content to be displayed");
console.log(fs.readFileSync('display.txt','utf8'));


//file using synchronous feature 
fs.readFile('context.html','utf8',(err,data)=>{
    console.log(data);
});

console.log("srikar003");

fs.writeFile('display.txt',"content to be displayed");
fs.readFile('display.txt','utf8',(err,data)=>{
    console.log(data);
});
