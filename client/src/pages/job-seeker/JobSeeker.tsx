import JobSeekerHeader from "../../components/layout/JobSeekerHeader.tsx";
import {Outlet} from "react-router-dom";

const JobSeeker = () => {
  return (
    <>
      <JobSeekerHeader/>
      <Outlet/>
    </>
  );
};

export default JobSeeker;