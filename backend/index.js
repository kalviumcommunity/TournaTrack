const express = require('express');
const app = express();

const mongoose = require('mongoose')

mongoose.set("strictQuery",false);
app.use('/',(req,res)=>{
    res.send("xfdfd")
})

mongoose.connect("mongodb+srv://shubhamkumar:802222@cluster0.fdyngxg.mongodb.net/?retryWrites=true&w=majority").then( () => {
    app.listen(5000, (req,res) => {
        console.log("I am here");
        
    })
   
})
.catch((error)=>{
console.log(error);
})