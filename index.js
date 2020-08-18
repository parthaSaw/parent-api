var express = require('express');
var app = express();
var router = require('./routers/router')
var bodyParser = require('body-parser');
var fs = require('fs')
var data = require('./data.json')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Simple API Gateway")
})

app.post('/login', (req,res)=>{   
    uname = req.body.uname
    pass = req.body.pass
    isTransaction = req.body.isTransaction
    // console.log(req.body.isTransaction)
    if(uname == data.uname && pass == data.pass){
        if(isTransaction){
            if(data.transactionsLeft > 0){
                data.transactionsLeft = data.transactionsLeft-1
                // console.log("hi")
                fs.writeFile("data.json",JSON.stringify(data),(err)=>{
                    if(err) console.log(err)
                    else console.log("updated in file")
                })
                res.send({
                    msg:"User Verified",
                    status:true,
                    data: data
                })
            }else{
                res.send({
                    msg:"Upgrade Your Plan",
                    status:false,
                    data: data
                })
            }
        }else{
            res.send({
                msg:"User Verified",
                status:true,
                data: data
            })
        }
    }else{
        res.send({
            msg:"Auth Failed",
            status:false
        })
    }
})

app.use(router)

console.log("Simple API Gateway run on localhost:3000")

app.listen(3000);