
const router = require("express").Router();
const passport = require("passport");

router.get('/login',(req,res)=>{
    res.render('login');
})

router.get('/logout',(req,res)=>{
    res.send("handle with passport.js");
})

router.get('/google',passport.authenticate('google',{
    scope:['profile'] 
}))

// router.get('/google/redirect/',passport.authenticate('google'),(req,res)=>{
//     res.send(req.user);
// })

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send(req.user);
    // res.redirect('/profile');
});


router.get('/',(req,res)=>{
    res.sendFile('../content/index.js');
})


module.exports =router;