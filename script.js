// const http = require('http');
// const fs = require('fs');
// console.log('path\nrobin\tvarghese');
// fs.rm(path.join(__dirname,'api'),{recursive:true},(e)=>{
//     if (e) throw e;
// });
// http.createServer((req,res)=>{
//     res.write("Server Created");
//     console.log("url",req.url);
//     res.end();
// }).listen(3000,()=>console.log("Server is Running"));


// Database connection


// var express = require('express');
// var app = express();

// var mongoose = require('mongoose');
// var x = mongoose.connect('mongodb://localhost/shop');

// var personSchema = mongoose.Schema({
//    name: String,
//    age: Number,
//    nationality: String
// });

// var Person = mongoose.model("Person", personSchema);

// var newPerson = new Person({
//     name: "Robin",
//     age: 27,
//     nationality: "Indian"
//  });
 
//   newPerson.save(function(err, Person){
//     if(err)
//        res.render('show_message', {message: "Database error", type: "error"});
//     else
//        res.render('show_message', {
//           message: "New person added", type: "success", person: personInfo});
//   });



// app.get('/mind', function(req, res){
//    Person.find(function(err, response){
//       res.json(response);
//    });
// });

// app.listen(3000);

