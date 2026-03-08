const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    console.log('user hit the Home Page')
    res.send('Home Page')
})
app.get('/about',(req,res)=>{
    console.log("user hit the About Page")
    res.send('About Page')
})
app.use((req,res)=>{
    res.status(404).send("<h1>Resource Not Found</h1>")
    console.log("Bad")
})

app.listen(5000,()=>{
    console.log("hellow");
})