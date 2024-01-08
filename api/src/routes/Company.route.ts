import {Router} from "express";
import {createCompany, getAllCompanies, getCompany, updateCompany} from "../controller/Company.controller";
import {verifyToken} from "../middlewares/VerifyToken";


const router = Router();
router.post("/", createCompany);
router.put("/:id", verifyToken, updateCompany);
router.get("/", getAllCompanies);
router.get("/:id", getCompany);
export default router;
