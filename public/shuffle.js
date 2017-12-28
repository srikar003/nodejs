var shuffle = require('shuffle-array');
var fs=require('fs');
fs.readFile('./teams.json',(err,data)=>{
	if(err){
		console.log("error occured");
	}
	else{
		var obj = JSON.parse(data);
		var s=obj.aspirants;
		var num=obj.noofteams;
		shuffle(s);
		var count=0;
		for(var i=0;i<s.length;i++){
    		console.log(s[i]);
    		count++;
    		if(count==num){
        	count=0;
        	console.log('\n');
    	}
	}
}
});
