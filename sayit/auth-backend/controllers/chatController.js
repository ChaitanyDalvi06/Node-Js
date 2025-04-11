import chatModel from "../Models/chatModel.js"
export async function chat(req, res) {

    let chat = req.body;

    try {
        await chatModel.create(chat)
        res.status(201).send({ message: "Chat created" })

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ messagea: "some problem" })
    }

    console.log(req.body)
    res.send({ message: "Chat created" })
}

export async function getConversation(req, res) {
    let loggedid = req.params.loggedid;
    let friendid = req.params.friendid;

    // let loggedmsgs= await chatModel.find({sender:loggedid,receiver:friendid})
    // let friendmsgs= await chatModel.find({sender:friendid,receiver:loggedid})

    // let conversation=[...loggedmsgs,...friendmsgs]

    try {
        let conversation = await chatModel.find(
            {
                $or: [
                    { sender: loggedid, receiver: friendid },
                    { sender: friendid, receiver: loggedid }

                ]

            }).sort({ createdAt: 1 })


        res.send(conversation)
    }
    catch{
        console.log(err)
        res.status(500).send({message:"Some problem"})
    }
}




