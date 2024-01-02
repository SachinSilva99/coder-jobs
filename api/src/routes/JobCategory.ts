import {Router} from "express";
import {createJobCategory} from "../controller/Category.controller";

const router = Router();
router.post("/", createJobCategory);
export default router;