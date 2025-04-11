import bcryptjs from 'bcryptjs'
import userModel from '../Models/userModels.js';
import  jwt from 'jsonwebtoken'; // payload metadata,the signature algorithm
import authMiddleware from '../middleware/authMiddleware.js';
import { SECRET_KEY } from '../constant.js';




export async function register (req, res)  {

    let user = req.body;

    // hashing
    let salt = bcryptjs.genSaltSync(10)
    let newPassword = bcryptjs.hashSync(user.password, salt)
    user.password = newPassword

    try {
        await userModel.create(user)
        res.status(201).send({ message: "User Registred" })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ message: "Some Problem" })
    }


}

export async function login (req, res) {
    const userCreds = req.body

    try {
        let user = await userModel.findOne({ username: userCreds.username })
        if (!user) {
            res.status(404).send({ message: "Username doesn't exist" })
        }
        else {
            bcryptjs.compare(userCreds.password, user.password, (err, result) => {
                if (!err) {
                    if (result === true) {
                        let token=jwt.sign({username:user.username},SECRET_KEY)
                        res.send({token:token,message:"welcome user !!" })
                    }
                    else {
                        res.status(401).send({ message: "Password is incorrect" })
                    }
                }
                else {
                    res.status(500).send({ message: "Some Problem" })
                }
            })
        }

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ message: "Some Problem" })
    }



}

export function test (req,res)
{
    res.send({message:"Test success"})

}



