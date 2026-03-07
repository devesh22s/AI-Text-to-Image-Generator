import express from 'express'
import { userAuth } from '../middlewares/auth'
import { imageGenerate } from '../controllers/imageController'


const imageRouter = express.Router()
imageRouter.post('/generate-image', userAuth, imageGenerate)

export default imageRouter;