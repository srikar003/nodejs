const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
  res.render('mainpage');
})
app.get('/emp/:name',(req,res)=>{
  res.render('emp',{person:req.params.name})
})

app.listen(3200)
