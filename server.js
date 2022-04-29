const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser');
const path=require('path')
const app=express()
const port = 3000
const Feedback = require("./models/model")
// const { json } = require("express");

// const db = 'mongodb+srv://Vishakha:vishakha@cluster0.xmebb.mongodb.net/AlgorithmWebsite?retryWrites=true&w=majority'
// console.log(__dirname);
const staticPath = path.join(__dirname,"./public")
app.use(express.static(staticPath));
const DB = 'mongodb+srv://Project:project@cluster0.xmebb.mongodb.net/AlgorithmWebsite?retryWrites=true&w=majority'

mongoose.connect(DB,{
    useNewUrlParser:true
}).then(()=>{
    console.log("Connection Successsful");
}).catch((err)=>{
    console.log(err);
})

app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json());
// app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"))
    // res.sendFile(path.join(__dirname, '/index.html'));
});

app.get("/about",(req,res)=>{
    // res.sendFile(path.join(__dirname,"public","about.html"))
    res.sendFile(path.join(__dirname, '/about.html'));
   
});

app.get("/contact",(req,res)=>{
    // res.sendFile(path.join(__dirname,"public","contact.html"))
    res.sendFile(path.join(__dirname, '/contact.html'));
});

app.post("/contact",async (req,res)=>{
    try{
       const User = new Feedback({
        name : req.body.name,
        email : req.body.email,
        mobileno : req.body.mobileno,
        comment :  req.body.comment,
       })

       const newUser = await User.save();
    //  res.render(index)
    console.log("Successful Uploaded");
    res.sendFile(path.join(__dirname, '/contact.html'));
    }
    catch(err){
        // res.status(400).send(error);
        console.log(err)
        
    }
})

app.listen(port,()=>{
    console.log(`App is listening at http://localhost:${port}`)
})