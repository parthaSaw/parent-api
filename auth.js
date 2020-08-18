
module.exports=(req,res,next)=>{
    try{
        var user = {
            uname:"admin",
            pass:"admin",
            transactions:10
        }

        if(req.body.uname == user.uname  && req.body.pass==user.pass) {
            
            next()
        }
        else{
            var err = new Error('You are not Authenticated')
            res.status(401)
            res.json("Auth Fail")
        }
    }
    catch(err){
        var err = new Error('You are not Authenticated')
        res.status(401)
        res.json("Auth Fail")
    }
}