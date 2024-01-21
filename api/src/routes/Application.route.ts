import {verifyToken} from "../middlewares/VerifyToken";
import {Router} from "express";
import {
  createApplication, getAllApplications, getApplication,
  getApplicationsOfCompany,
  getApplicationsOfLoggedCompany
} from "../controller/Application.controller";


const router = Router();
router.post("/", verifyToken, createApplication);
router.get("/logged-by-company", verifyToken, getApplicationsOfLoggedCompany);
router.get("/by-company/:id", verifyToken, getApplicationsOfCompany);
router.get("/all", verifyToken, getAllApplications);
router.get("/:id", verifyToken, getApplication);

export default router;
