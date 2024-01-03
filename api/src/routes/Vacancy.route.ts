import {Router} from "express";
import {createVacancy} from "../controller/VacancyController";


const router = Router();
router.post("/", createVacancy);
/*router.get("/:id", getCompanyPackage);
router.get("/", getAllCompanyPackage);
router.patch("/:id", updateCompanyPackage);
router.delete("/:id", deleteCompanyPackage);*/
export default router;