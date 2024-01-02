import {Router} from "express";
import {createJobCategory, getAllJobCategories, updateJobCategory} from "../controller/Category.controller";

const router = Router();
router.post("/", createJobCategory);
router.get("/", getAllJobCategories);
router.put("/:category", updateJobCategory);
export default router;