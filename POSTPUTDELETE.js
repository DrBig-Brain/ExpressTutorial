const express = require('express');
const {people} = require('./data')
const app = express();

app.use(express.static('./method-public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post('/login',(req,res)=>{
    const {name} = req.body
    if (name){
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send("Please provide credentials")
})

app.post('/api/people',(req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false,msg:'please provide name value'})
    }
    res.status(201).json({success:true,person:name})
})
app.post('/postman/people',(req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false,msg:'please provide name value'})
    }
    res.status(201).json({success:true,data:[...people,name]})
})

app.get('/api/people/',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.put("/api/people/:id",(req,res)=>{
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person)=>person.id === Number(id))
    if(!person){
        return res.status(404).json({success:false,msg:"request failed"})
    }
    const newPeople = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).send({success:true,data:newPeople})
})

app.delete("/api/people/:id",(req,res)=>{
    const {id} = req.params
    const person = people.find((person)=>person.id === Number(id))
    if(!person){
        return res.status(404).json({success:false,msg:"request failed"})
    }
    const newPeople = people.filter((person) => person.id!=Number(id))
    res.status(200).send({success:true,data:newPeople})
})

app.listen(5000,()=>{
    console.log("the port is active")
})