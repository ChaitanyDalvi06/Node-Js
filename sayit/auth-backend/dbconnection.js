import mongoose from "mongoose";

export default function connectDB()
{
    mongoose.connect("mongodb://localhost:27017/messanger")
    .then(()=>
    {
        console.log("database up and running")
    })
    .catch((err)=>
    {
        console.log(err)
        
    })
}