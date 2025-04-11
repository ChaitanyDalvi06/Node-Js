import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../constant.js';


export default function authMiddleware(req,res,next)
{
    if(req.headers.authorization!==undefined)
    {
        let tokenString = req.headers.authorization;
        let token = tokenString.split(" ")[1]
        jwt.verify(token,SECRET_KEY,(err,decode)=>{
            if(!err)
            {
                next()
            }
            else{
                res.status(403).send({message:"Invalid or Expired Token"})
            }
        })
    }
    else
    {
        res.status(403).send({message:"Authorization token not present"})
    }

    
}