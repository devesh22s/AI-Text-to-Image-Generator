import express from 'express'
import { userAuth } from '../middlewares/auth.js'
import { imageGenerate } from '../controllers/imageController.js'


const imageRouter = express.Router()
imageRouter.post('/generate-image', userAuth, imageGenerate)

export default imageRouter;