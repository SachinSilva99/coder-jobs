import {Router} from "express";
import {
  createVacancy, deleteVacancy,
  getAllVacancies,
  getAllVacanciesOfCompany, getAllVacanciesOfLoggedInCompany,
  getVacancy,
  updateVacancy
} from "../controller/VacancyController";
import {verifyToken} from "../middlewares/VerifyToken";


const router = Router();
router.post("/",verifyToken, createVacancy);
router.get("/logged-in/company",verifyToken, getAllVacanciesOfLoggedInCompany);
router.get("/:id", getVacancy);
router.get("/", getAllVacancies);
router.get("/company/:companyId", getAllVacanciesOfCompany);
router.put("/:id",verifyToken, updateVacancy);
router.delete("/:id", deleteVacancy);
export default router;
