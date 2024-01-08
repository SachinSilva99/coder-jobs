import express from "express";
import {createRequest} from "../controller/RequestController";
import {verifyToken} from "../middlewares/VerifyToken";


const router = express.Router();
router.post("/", verifyToken, createRequest);
export default router;
