import {Outlet} from "react-router-dom";
import CompanyHeader from "../../components/layout/CompanyHeader.tsx";

const Company = () => {
  return (
    <>
      <CompanyHeader/>
      <Outlet/>
    </>
  );
};

export default Company;