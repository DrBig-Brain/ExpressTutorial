const express = require('express');
const {products} = require('./data')
const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    res.json(products)
})

app.listen(5000,()=>{
    console.log("the user has arrived at 5000");
})