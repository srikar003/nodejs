const express = require('express');
const app = express();

//it is used for setting the view engine
app.set('view engine','ejs');

//it is used to provide where the static folders are available usually called as middlewares
app.use('/assets',express.static('assets'))

app.get('/',(req,res)=>{
  res.render('mainpage');
})
app.get('/emp/:name',(req,res)=>{
  res.render('emp',{person:req.params.name})
})

//server call
app.listen(3200)
