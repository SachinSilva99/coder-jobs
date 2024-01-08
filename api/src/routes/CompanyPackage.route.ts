import {Router} from "express";
import {
  createCompanyPackage,
  getAllCompanyPackage,
  getCompanyPackage,
  updateCompanyPackage,
  deleteCompanyPackage
} from "../controller/CompanyPackage.controller";
import {verifyToken} from "../middlewares/VerifyToken";

const router = Router();
router.post("/",verifyToken, createCompanyPackage);
router.get("/:id", getCompanyPackage);
router.get("/", getAllCompanyPackage);
router.patch("/:id", verifyToken,updateCompanyPackage);
router.delete("/:id",verifyToken, deleteCompanyPackage);
export default router;
