import express from 'express'
import cors from 'cors'
import connectDB from './dbConnection.js'
import authRouter from './Routes/authRouter.js'
import authMiddleware from './middleware/authMiddleware.js';
import chatRouter from './Routes/chatRouter.js'
import userRouter from './Routes/userRouter.js'

connectDB()

const app = express();


//inbuilt middleware
app.use(express.json())

app.use(cors())


//routing
app.use("/auth",authRouter)

// auth middleware
app.use(authMiddleware)

//private routers
app.use('/users',userRouter)
app.use("/chat",chatRouter)

app.listen(8000,()=>{
    console.log("Server is Up")
})