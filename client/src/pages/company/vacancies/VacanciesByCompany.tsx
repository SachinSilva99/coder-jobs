import {useEffect, useState} from "react";
import {getAllVacancy} from "../../../service/company/VacancyService.ts";
import Cookies from "js-cookie";
import {TOKEN} from "../../../util/TOKEN.ts";
import VacancyCard from "../../../components/cards/VacancyCard.tsx";
import {useNavigate} from "react-router-dom";

interface VacancyCard {
  _id: string,
  jobTitle: string,
  category: string,
  subCategory: string,
  editOnClick: (id: string) => void,
  deleteOnClick: (id: string) => void,
}

function VacanciesByCompany() {
  const navigate = useNavigate();
  const [vacancies, setVacancies] = useState<VacancyCard[]>([]);
  useEffect(() => {
    const loadVacancies = async () => {
      const loadedVacancies = await getAllVacancy(Cookies.get(TOKEN));
      setVacancies(loadedVacancies);
    }
    loadVacancies();
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-16 min-h-[90vh]">
      <h1 className='font-semibold text-2xl my-4'>Vacancies</h1>
      {/*vacancies by company*/}
      <div className='flex flex-col md:flex-row my-4 gap-4 w-full'>
        {vacancies.map(vacancyCard => (
          <VacancyCard
            key={vacancyCard._id}
            _id={vacancyCard._id}
            jobTitle={vacancyCard.jobTitle}
            category={vacancyCard.category}
            subCategory={vacancyCard.subCategory}
            editOnClick={() => {
              navigate('/company/make-vacancy', {state: {vacancy: vacancyCard}})
            }}
            deleteOnClick={() => {
              console.log("pressed delete")
            }}/>))
        }
      </div>
    </div>
  );
}

export default VacanciesByCompany;
