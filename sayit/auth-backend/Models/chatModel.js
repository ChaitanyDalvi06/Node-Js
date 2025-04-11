import { timeStamp } from "console";
import mongoose, { mongo } from "mongoose";

const chatSchema = mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'users'
    },
    receiver: {
        type: mongoose.Types.ObjectId,
        rquired: true,
        ref:'users'
    },
    message: {
        type: String,
        rquired: true
    }

}, { timestamps: true })



const chatModel= mongoose.model('chats',chatSchema)
export default chatModel