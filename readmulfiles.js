const fs=require('fs');
fs.readdir(__dirname,(err,files)=>{
    files.forEach(file_name=>{
        console.log(file_name);
    });
    files.forEach(file_name=>{
    fs.readFile(file_name,'utf8',(err,data)=>{
    console.log(data);
    });
});
});