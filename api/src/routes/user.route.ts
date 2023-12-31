import express from "express";
import {userSignUp} from "../controller/Auth.controller";

const router = express.Router();
router.post("", userSignUp);
export default router;