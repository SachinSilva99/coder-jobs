import {useEffect, useState} from "react";
import {getAllJobSeeker} from "../../service/job-seeker/JobSeekerService.ts";
import JobSeekerCard from "../../components/cards/JobSeekerCard.tsx";
import {useNavigate} from "react-router-dom";

export type JobSeekerType = {
  about: string;
  _id: string;
  category: string;
  subCategory: string;
  resume: string;
  avatar: string;
  gender: string;
  currentPosition: string,
  jobSeekerContact: string;
  user: {
    _id: string;
    fName: string;
    lName: string;
    email: string;
  };
};

function CompanyHero() {
  const navigate = useNavigate();
  const [jobSeekers, setJobSeekers] = useState<JobSeekerType[]>([]);
  useEffect(() => {
    getAllJobSeeker()
      .then(js => setJobSeekers(js))
      .catch(er => console.log(er))
  }, []);
  return (
    <div className='px-4 md:px-8 lg:px-16 min-h-[90vh]'>
      <div className='my-4 flex flex-col gap-8'>
        {jobSeekers.map(jobSeeker =>
          <JobSeekerCard key={jobSeeker._id}
            jobSeeker={jobSeeker}
            offerOnClick={() => {
              navigate('make-request', {state: {jobSeeker: jobSeeker}})
            }}/>)}
      </div>
    </div>
  );
}

export default CompanyHero;
