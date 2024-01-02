import {Router} from "express";
import {createSubJobCategory, getAllSubJobCategories} from "../controller/SubCategoryController";
import {updateJobCategory} from "../controller/Category.controller";

const router = Router();
router.post("/", createSubJobCategory);
router.get("/", getAllSubJobCategories);

export default router;