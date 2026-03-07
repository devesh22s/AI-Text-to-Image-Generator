import express from "express"
import { loginUser, registerUser, userCredits } from "../controllers/userController"
import { userAuth } from "../middlewares/auth"


const userRouter = express.Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.post("/credits",userAuth, userCredits)

export default userRouter;