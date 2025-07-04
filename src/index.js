import express from 'express'
import { PORT } from '../constants.js'
import loginRoutes from "./routes/login.routes.js";
import userRoutes from "./routes/users.routes.js"

const app = express()

app.use(express.json())

app.use("/api",loginRoutes)
app.use("/api",userRoutes)

app.listen(PORT,()=>{
    console.log("Server running un PORT",PORT)
})