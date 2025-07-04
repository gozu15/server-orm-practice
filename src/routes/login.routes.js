import {Router} from "express"
import { LogIn } from "../controllers/login.controllers.js"

const router = Router()

router.post('/login',LogIn)

export default router