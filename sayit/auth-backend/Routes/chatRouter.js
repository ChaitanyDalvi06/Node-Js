import express from 'express'
import { chat, getConversation } from '../controllers/chatController.js'
const router = express.Router()

router.post("/",chat)
router.get('/:loggedid/:friendid',getConversation)

export default router
