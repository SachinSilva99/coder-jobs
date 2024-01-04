import {Router} from "express";
import {
  createVacancy, deleteVacancy,
  getAllVacancies,
  getAllVacanciesOfCompany,
  getVacancy,
  updateVacancy
} from "../controller/VacancyController";


const router = Router();
router.post("/", createVacancy);
router.get("/:id", getVacancy);
router.get("/", getAllVacancies);
router.get("/company/:companyId", getAllVacanciesOfCompany);
router.put("/:id", updateVacancy);
router.delete("/:id", deleteVacancy);
export default router;