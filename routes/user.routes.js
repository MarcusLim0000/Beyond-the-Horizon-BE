import { Router } from "express";
import { create, signIn } from "../controllers/user.controller.js";

const router = Router();

router.post("/", create);
router.post("/sign-in", signIn);

export default router;
