import {verifyToken} from "../middlewares/VerifyToken";
import {Router} from "express";
import {createApplication, getApplicationsOfLoggedCompany} from "../controller/Application.controller";


const router = Router();
router.post("/", verifyToken, createApplication);
router.get("/logged-by-company", verifyToken, getApplicationsOfLoggedCompany);

export default router;
