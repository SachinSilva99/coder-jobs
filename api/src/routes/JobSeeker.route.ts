import {Router} from "express";
import {
  createJobSeeker,
  deleteJobSeeker,
  getAllJobSeekers,
  getJobSeeker,
  updateJobSeeker
} from "../controller/JobSeeker.controller";
import {verifyToken} from "../middlewares/VerifyToken";


const router = Router();
router.post("/", createJobSeeker);
router.get("/:id", verifyToken, getJobSeeker);
router.get("/", verifyToken, getAllJobSeekers);
router.patch("/:id", verifyToken, updateJobSeeker);
router.delete("/:id", verifyToken, deleteJobSeeker);
export default router;
