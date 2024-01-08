import {Router} from "express";
import {
  createJobCategory,
  getAllJobCategories,
  getCategory,
  updateJobCategory
} from "../controller/Category.controller";
import {verifyToken} from "../middlewares/VerifyToken";

const router = Router();
router.post("/",verifyToken, createJobCategory);
router.get("/:category", getCategory);
router.get("/", getAllJobCategories);
router.put("/:category",verifyToken, updateJobCategory);
export default router;
