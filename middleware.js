const express = require('express');
const {products} = require('./data')
const app = express();

//Req -> middleware -> res

const logger = () =>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time)
}

app.get('/',logger(),(req,res)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time)
    res.send("home");
})
app.get('/about',(req,res)=>{
    res.send('About')
})


app.listen(5000,()=>{
    console.log("port is active")
})

