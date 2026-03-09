const express = require('express');
const {products} = require('./data');
const app = express();

app.get('/',(req,res)=>{
    res.send("<h1>Home</h1><a href='/api/products/1'>product</a>")
})

app.get('/api/products/:productID',(req,res)=>{
    const {productID} = req.params;
    const singleProduct = products.find((product) => product.id=Number(productID))
    res.json(singleProduct)
})

app.listen(5000,()=>{
    console.log("port active")
})