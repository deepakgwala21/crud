const express = require('express')
const  app= express();
const mongoose = require('mongoose')
const userRoute = require('./routes/userRoute.js')
var bodyParser = require('body-parser')
var url = "mongodb://127.0.0.1:27017/user"

mongoose.connect(url,()=>{
  
 console.log("connection is successfully");

})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/user',userRoute)
app.listen(3000,()=>{
  console.log("http://localhost:3000/")
})