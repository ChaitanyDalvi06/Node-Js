import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

const app = express()
const httpServer = http.createServer(app)
app.use(cors())


const io = new Server(httpServer,{
    cors:{
        origin:"*"
    }
})


io.on("connection",(socket)=>
{
    console.log(`client connected with id ${socket.id}`)

    socket.on("message",(data)=>
    {
        console.log(data)

        io.emit("toclient","Hello client")
    })
})
























httpServer.listen(8000, () => {
    console.log("server is running")
})
