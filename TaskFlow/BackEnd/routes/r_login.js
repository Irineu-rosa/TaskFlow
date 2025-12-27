import {Router} from "express";
import { loginUser } from "../controller/c_login.js";

const router = Router();

router.post("/login", loginUser);

export default router;