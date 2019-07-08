var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo}= require('./models/todo');
var {User}= require('./models/user');

var app =express();

var port = process.env.Port || 3000 ;

app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
var newTodo = new Todo({
  text: req.body.text
});

newTodo.save().then((doc)=>{
  res.status(200).send(doc);
},(err)=>{
  res.status(400).send(err);
});
});


app.get('/todos',(req,res)=>{

Todo.find().then((doc)=>{
  res.status(200).send({doc});
},(err)=>{
  res.status(400).send(err);
});
});

app.get('/todos/:id',(req,res)=>{
var id = req.params.id;

 if(! ObjectID.isValid(id)){
   return res.status(400).send('id not valid');
 }

Todo.findById(id).then((doc)=>{
  res.status(200).send({doc});
},(err)=>{
  res.status(400).send(err);
});
});

app.listen(port,()=>{
  console.log(`listening to ${port}`);
});
module.exports = {app};
