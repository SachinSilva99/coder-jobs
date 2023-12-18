import Header from "../../components/layout/Header.tsx";
import {Outlet} from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  );
};

export default Home;