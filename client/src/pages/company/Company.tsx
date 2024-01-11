import {Navigate, Outlet} from "react-router-dom";
import CompanyHeader from "../../components/layout/CompanyHeader.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/Store.ts";

const Company = () => {
  const {currentUser} = useSelector((state: RootState) => state.user);
  return currentUser?.userType === "COMPANY" ? <>
    <CompanyHeader/>
    <Outlet/>
  </> : <Navigate to="/login"/>;
};

export default Company;
