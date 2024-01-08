import {Router} from "express";
import {login, userSignUp} from "../controller/Auth.controller";


const router = Router();
router.post("/", userSignUp);
router.post("/login", login);
export default router;
