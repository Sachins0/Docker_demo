const express= require('express');
const dotenv= require('dotenv');
dotenv.config();

const app= express();

app.get('/home',(req, res)=>{
    res.json({message: 'homecoming'})
})

app.get('/info',(req, res)=>{
    res.json({message: 'info'})
})

app.get('/about',(req, res)=>{
    res.json({message: 'about'})
})

app.listen(process.env.PORT,()=>{
    console.log('started server',);
})