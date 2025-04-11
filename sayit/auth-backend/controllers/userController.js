import userModel from '../Models/userModels.js';



export async function searchByUsername(req, res)  
{
    const username = req.params.username;

    //await userModel.find({username:{regex:username,options:'i'}})

    try {
        let users = await userModel.find({ username: { $regex: username, $options: 'i' } }) //$regex is used to search for a string in the database , $options :'i' is used to make case insensitive
        res.status(200).send(users)
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ message: "some problem" })

    }

}