const express = require('express');
const {products} = require('./data');
const app = express();

app.get('/',(req,res)=>{
    res.send("<h1>Home</h1><a href='/api/v1/query?search=alb&limit=2'>abhinav</a>")
})

app.get('/api/v1/query',(req,res)=>{
    const {search,limit} = req.query;
    let sortedProducts = [...products]; 
    if (search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    res.status(200).json(sortedProducts)
    res.send("hello world")
})

app.listen(5000,()=>{
    console.log("port active")
})