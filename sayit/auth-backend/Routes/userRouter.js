import express from 'express'
import {searchByUsername} from '../controllers/userController.js'

const router = express.Router()

router.get("/search/:username",searchByUsername)


export default router