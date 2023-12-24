import express from "express";
import {getUser} from "../controller/user.controller";

const router = express.Router();
router.get("/test", getUser);
export default router;