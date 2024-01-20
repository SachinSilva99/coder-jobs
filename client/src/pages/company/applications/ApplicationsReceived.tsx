import ApplicationReceivedCard from "../../../components/cards/ApplicationReceivedCard.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/Store.ts";
import {useEffect, useState} from "react";
import {
  getAllApplicationsOfLoggedInCompany,
  getAllVacancyOfLoggedInCompany
} from "../../../service/vacancy/VacancyService.ts";
import Cookies from "js-cookie";
import {TOKEN} from "../../../util/TOKEN.ts";

interface JobApplication {
  _id: string;
  jobSeeker: {
    _id: string;
    resume: string;
    avatar: string;
    user: {
      _id: string;
      fName: string;
      lName: string;
      email: string;
    };
  };
  vacancy: {
    _id: string;
    company: string;
    jobTitle: string;
    description: string;
    category: string;
    subCategory: string;
    jobType: string;
    modality: string;
    salary: number;
    endingDate: string;
    startingDate: string;

  };
  status: string;
}



const ApplicationsReceived = () => {
  const [vacancies, setVacancies] = useState<JobApplication[]>([])
  useEffect(() => {
    getAllApplicationsOfLoggedInCompany(Cookies.get(TOKEN))
      .then(allVacancies => setVacancies(allVacancies))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className='px-4 md:px-8 lg:px-16 min-h-[90vh]'>
      <div className='flex flex-col flex-wrap gap-4  my-4 2xl:justify-between'>
        {vacancies.map(value => (
          <ApplicationReceivedCard userPic={value.jobSeeker.avatar} _id={value._id} category={value.vacancy.category} subCategory={value.vacancy.subCategory}
                                   jobTitle={value.vacancy.jobTitle}/>
        ))}
      </div>
    </div>
  );
};

export default ApplicationsReceived;
