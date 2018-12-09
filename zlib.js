const fs = require("fs"),
    zlib = require("zlib"),
    path = require('path')
    filename= "../data/40mb.pdf.gz",
    compress = zlib.createGzip(), // compress
    decompress = zlib.createGunzip(), // decompress
    readstream = fs.createReadStream(filename);
function compressfile(filename){
    var newfilename = filename+".gz",
        writestream = fs.createWriteStream(newfilename);
    readstream.pipe(compress).pipe(writestream);
}
function deCompressfile(filename){
    var newfilename = filename.replace(".gz",""),
        writestream = fs.createWriteStream(newfilename);
    readstream.pipe(decompress).pipe(writestream);
    
}
if(path.extname(filename)=='.gz'){
    deCompressfile(filename);
    console.log('file decompressed successfully');
}
else {
    compressfile(filename);
    console.log('file compressed successfully')
}