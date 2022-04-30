import { Router } from "express";
import * as authController from '../controllers/auth.controller'
const router = Router();

router.post("/signup", authController.singUp);
router.post("/signin", authController.singIn);

export default router;