import JobSeekerHeader from "../../components/layout/JobSeekerHeader.tsx";
import {Outlet, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/Store.ts";

const JobSeeker = () => {
  const {currentUser} = useSelector((state: RootState) => state.user);
  return currentUser?.userType === "JOB_SEEKER" ? <>
    <JobSeekerHeader/>
    <Outlet/>
  </> : <Navigate to="/login"/>;
};

export default JobSeeker;
