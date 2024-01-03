import {Router} from "express";
import {
  createCompanyPackage,
  getAllCompanyPackage,
  getCompanyPackage,
  updateCompanyPackage,
  deleteCompanyPackage
} from "../controller/CompanyPackage.controller";

const router = Router();
router.post("/", createCompanyPackage);
router.get("/:id", getCompanyPackage);
router.get("/", getAllCompanyPackage);
router.patch("/:id", updateCompanyPackage);
router.delete("/:id", deleteCompanyPackage);
export default router;