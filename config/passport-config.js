const passport =require("passport");
const googleStartegy =require("passport-google-oauth20").Strategy;

passport.use(
    new googleStartegy({
        callbackURL:"/auth/google/redirect",
        clientID: "381482749483-i3pg3jjmntpof4fgpc7rpf8i2a35m9o5.apps.googleusercontent.com",
        clientSecret: "hHK7PiYpeFNdwiWW_OsXX8bf"
    },(accessToken,refreshToken,profile,done)=>{
        
        console.log("passport callback called")
        console.log(profile);

    })

)
