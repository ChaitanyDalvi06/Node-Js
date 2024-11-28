// // const express = require('require');
// import { a,doSomething,nums,obj } from './data.js'
// import express from 'express'
// import connect from './data.js'

// console.log(a,nums,obj)
// doSomething()

import express from "express";

const app = express() // express ka object hai ye


//app.use(doCheck) // use middleware lagane ke liye use hota

app.get("/products", (req, res) => {
    res.send("All products")
})


app.get("/products/:id",doCheck,(req,res)=>{
    
    res.send("Single Product")
})

app.post("/products",express.json(),(req,res)=>{ //express.json is middleware to collect the data otherwise we have to collect it chunk by chunk

    console.log(req.body)

    res.send("Product Created")
})

// simple middleware

function doCheck(req,res,next)
{
    if(req.headers.authorization!==undefined)
    {
        if(req.headers.authorization==="abc")
        {
            next()
        }
    }

    res.send("you are not allowed")
    console.log(req.headers)
}

app.listen(8000, () => {
    console.log("Server is running")
})