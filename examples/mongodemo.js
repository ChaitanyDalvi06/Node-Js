import mongoose from "mongoose";

// create connection

mongoose.connect("mongodb://localhost:27017/btechpracs")
.then(()=>{
    console.log("mongo connection successfull");
})
.catch((err)=>{
    console.log(err);
})

// create a schema

const productSchema = mongoose.Schema({
    name:{
        type:String,required:true
    },
    price:{
        type:Number,required:true
    },
    category:{
        type:String,required:true
    },
    brand:{
        type:String,required:true
    }
})

const productModel = mongoose.model("products",productSchema) //Model Creation


// inserting a document

// productModel
// .create({name:"Iphone 14",price:89000,category:"Mobile",brand:"Apple"})
// .then(()=>{
//     console.log("Created");
// })
// .catch((err)=>{
//     console.log(err);
// })


// fetch docs 

// productModel.find()
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

// productModel.find({name:"Iphone 14"})
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

// delete doc

productModel.deleteOne({_id:"67416728a48e75fad675ae54"})
.then(()=>{
    console.log("Deletion Successful");
})
.catch((err)=>{
    console.log(err);
})    

// update 

// productModel.updateMany({category:"Mobile"},{price:2000})
// .then(()=>{
//     console.log("updated")
// })
// .catch((err)=>{
//     console.log(err);
// })