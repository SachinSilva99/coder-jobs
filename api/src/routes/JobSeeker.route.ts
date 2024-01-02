import express from "express";
import {createJobSeeker} from "../controller/JobSeeker.controller";


const router = express.Router();
router.post("/", createJobSeeker);
export default router;