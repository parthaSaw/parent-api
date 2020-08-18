module.exports=(req,res,next)=>{
    res.send("HJ")
    try{
        var user = {
            uname:"admin",
            pass:"admin",
            transactions:10
        }

        if(req.body.uname == user.uname  && req.body.pass==user.pass) {
            res.send({"status":true})
        }
        else{
            res.send({"status":false})
        }
    }
    catch(err){
        res.send({"status":false})
    }
}