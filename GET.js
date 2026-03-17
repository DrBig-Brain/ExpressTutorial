const express = require('express');
const {people} = require('./data')
const app = express();

app.use(express.static('./method-public'))
app.use(express.urlencoded({extended:false}))

app.post('/login',(req,res)=>{
    const {name} = req.body
    if (name){
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send("Please provide credentials")
})

app.get('/api/people/',(req,res)=>{
    res.status(200).json({success:true,data:people})
})


app.listen(5000,()=>{
    console.log("the port is active")
})