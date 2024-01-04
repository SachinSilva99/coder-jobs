import {Router} from "express";
import {createCompany, getAllCompanies, getCompany, updateCompany} from "../controller/Company.controller";


const router = Router();
router.post("/", createCompany);
router.put("/:id", updateCompany);
router.get("/", getAllCompanies);
router.get("/:id", getCompany);
export default router;