import { Router } from "express";
import { createSuperAdmin, getUsers } from "../controllers/users.controllers.js";

const router = Router()

router.get('/users',getUsers)
router.get('/createSA',createSuperAdmin)
export default router