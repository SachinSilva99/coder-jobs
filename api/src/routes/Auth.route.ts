import {Router} from "express";
import {userSignUp} from "../controller/Auth.controller";


const router = Router();
router.post("", userSignUp);
export default router;