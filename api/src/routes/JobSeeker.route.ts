import express from "express";
import {createJobSeeker, getAllJobSeekers, getJobSeeker, updateJobSeeker} from "../controller/JobSeeker.controller";


const router = express.Router();
router.post("/", createJobSeeker);
router.get("/:id", getJobSeeker);
router.get("/", getAllJobSeekers);
router.patch("/:id", updateJobSeeker);
export default router;