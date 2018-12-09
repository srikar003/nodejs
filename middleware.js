const express = require('express')
const app = express()
const fs = require('fs')
i = 0
const bodyParser = require('body-parser')
// app.use(express.static(__dirname+"/html"));
app.use(bodyParser.text({
	limit: '50mb'
}));
app.use(bodyParser.urlencoded({
	extended: true
}))

const timelogger = (req, res, next) => {
	i++
	console.log("logged in for time ", i);
	next()
}
app.post('/', timelogger, (req, res) => {
	let content = req.body;
	fs.appendFile('../data/newfile.txt', content, (err) => {
		if (err)
			console.error(err);
		else{
			res.send('data inserted successfully')
		}
	})
});
app.get('/content', timelogger, (req, res) => {
	fs.readFile('newfile.txt', 'utf-8', (err, data) => {
		if (err)
			console.error(err);
		else{
			res.send(data);
		}
	})
});
app.listen(3200, () => {
	console.log('listening at port 3200')
});