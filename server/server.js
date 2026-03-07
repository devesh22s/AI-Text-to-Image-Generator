import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import connectDB from './config/mongodb.js'
import userRouter from './Routes/user.route.js'
import imageRouter from './Routes/image.route.js'

const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())
app.use(cors())
await connectDB()


app.use("/api/user", userRouter)
app.use("/api/image", imageRouter)
app.get("/", (req, res)=> res.send("API working"))

app.listen(PORT, ()=>console.log("Server running on port:", PORT))



// first_dynamic_product_images111
// mongodb+srv://dynamic_product:first_dynamic_product_images111@cluster0.3oeapof.mongodb.net/