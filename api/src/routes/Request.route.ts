import express from "express";
import {
  createRequest, deleteRequest,
  getAllRequestByCompany,
  getAllRequestByLoggedInCompany, getAllRequestByLoggedInJobSeeker,
  getRequest
} from "../controller/RequestController";
import {verifyToken} from "../middlewares/VerifyToken";

const router = express.Router();
router.post("/", verifyToken, createRequest);
router.get("/request/:id", verifyToken, getRequest);
router.delete("/:id", verifyToken, deleteRequest);
router.get("/logged-by-company", verifyToken, getAllRequestByLoggedInCompany);
router.get("/logged-by-job-seeker", verifyToken, getAllRequestByLoggedInJobSeeker);
router.get("/by-company/:id", verifyToken, getAllRequestByCompany);
export default router;
