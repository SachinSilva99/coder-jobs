import {Router} from "express";
import {createSubJobCategory, getAllSubJobCategories, updateSubJobCategory} from "../controller/SubCategoryController";

const router = Router();
router.post("/", createSubJobCategory);
router.get("/", getAllSubJobCategories);
router.put("/", updateSubJobCategory);

export default router;