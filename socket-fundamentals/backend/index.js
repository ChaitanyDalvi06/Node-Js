import express from "express";
import cors from 'cors';
import http from 'http'
import {Server} from 'socket.io'

const app = express()
const httpServer = http.createServer(app)
app.use(cors())

const io = new Server(httpServer,{
    cors:{
        origin:"*"
    }
})


let rooms = ["Sports","Science","Gaming"]

io.on("connection",(socket)=>{

    console.log(`client connected with id ${socket.id}`)

    //emitting rooms
    io.emit("loadRooms",rooms)

    //room joining logic

    socket.on("joinRoom",(data)=>{
        let room = rooms.find((name)=>{
            return data.roomname === name
        })

        if(room!==undefined)
        {
            socket.join(room)
            io.to(room).emit("roomJoined",`${data.username} joined the ${room} room`)
        }

    })

socket.on('createchat',(data)=>
{
    io.to(data.roomname).emit("getChat",{username:data.username , message:data.message})
})





    // socket.on("message",(data)=>{
    //     console.log(data)
    //     io.emit("toclient",data)

    // })


})


httpServer.listen(8000,()=>{
    console.log("server is up")
})