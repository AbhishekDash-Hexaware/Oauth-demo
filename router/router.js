
const rourter = require("express").Router();
const passport = require("passport");

rourter.get('/login',(req,res)=>{
    res.render('login');
})

rourter.get('/logout',(req,res)=>{
    res.send("handle with passport.js");
})

rourter.get('/google',passport.authenticate('google',{
    scope:['profile'] 
}))

rourter.get('/google/redirect/',passport.authenticate('google'),(req,res)=>{
    res.send("reached callback uri");
})


module.exports =rourter;