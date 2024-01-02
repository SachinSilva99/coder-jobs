import {Router} from "express";
import {
  createJobSeeker,
  deleteJobSeeker,
  getAllJobSeekers,
  getJobSeeker,
  updateJobSeeker
} from "../controller/JobSeeker.controller";


const router = Router();
router.post("/", createJobSeeker);
router.get("/:id", getJobSeeker);
router.get("/", getAllJobSeekers);
router.patch("/:id", updateJobSeeker);
router.delete("/:id", deleteJobSeeker);
export default router;