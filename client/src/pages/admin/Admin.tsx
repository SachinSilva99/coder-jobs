import AdminHeader from "../../components/layout/AdminHeader.tsx";
import {Outlet} from "react-router-dom";

const Admin = () => {
  return (
    <>
      <AdminHeader/>
      <Outlet/>
    </>
  );
};

export default Admin;