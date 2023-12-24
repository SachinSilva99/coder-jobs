import Header from "../../components/layout/Header.tsx";
import {Outlet} from "react-router-dom";
import JobSeekerHeader from "../../components/layout/JobSeekerHeader.tsx";

const Home = () => {
  return (
    <>
      <JobSeekerHeader/>
      <Outlet/>
    </>
  );
};

export default Home;