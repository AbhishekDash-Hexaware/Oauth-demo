const express = require('express')
var morgan = require('morgan')
const authRoutes =require('./router/router') 
const passportSetup =require('./config/passport-config')
const mongoose =require('mongoose');
const key=require("./config/key")


const app = express()

app.set('view engine','ejs');

app.use('/auth',authRoutes);
app.use(express.static(__dirname+"/content"));
app.use(morgan('common'))

mongoose.connect(key.mongo.dbUri,()=>{
    console.log("connected to mongo db");
})

var port = process.env.PORT || 7000;


app.get('/test',(req,res)=>{
    res.render('home');
})

app.get('/',(req,res)=>{ 
    res.sendFile(__dirname+"/content/index.html")
});


app.listen(port, (req,res)=>
    console.log('Example app listening on port 8080!')
)


