import { timeStamp } from "console";
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    username: {
        type: String, required: true,
        require:true,
        unique: [true, "username already exist"],
        min:[4,"username is too short"]
    },
    password:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        enum:["male","female","Male","Female"]
    },
    people:[{type:mongoose.Schema.Types.ObjectId,ref:'users'}],
    profilePic:{
        type:String,
        default:"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="

    },


},{timestamps:true})

const userModel=mongoose.model("user",userSchema)
export default userModel