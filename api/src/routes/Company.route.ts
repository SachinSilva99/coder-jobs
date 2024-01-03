import {Router} from "express";
import {createCompany} from "../controller/Company.controller";


const router = Router();
router.post("/", createCompany);
/*router.get("/:category", getCategory);
router.get("/", getAllJobCategories);
router.put("/:category", updateJobCategory);*/
export default router;