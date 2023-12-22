import {createBrowserRouter} from "react-router-dom";
import Login from "./login/Login.tsx";
import Register from "./register/Register.tsx";
import Error from "./error/Error.tsx";
import Home from "./home/Home.tsx";
import HeroSection from "./home/HeroSection.tsx";
import ApplyJob from "./home/apply/ApplyJob.tsx";
import Admin from "./admin/Admin.tsx";
import Stats from "./admin/stats/Stats.tsx";
import JobSeekers from "./admin/job-seekers/JobSeekers.tsx";
import Companies from "./admin/companies/Companies.tsx";

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login/>,
  }, {
    path: "/admin/*",
    element: <Admin/>,
    children: [
      {
        path: "",
        element: <Stats/>,
      },
      {
        path: "job-seekers",
        element: <JobSeekers/>,
      },   {
        path: "companies",
        element: <Companies/>,
      },
    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/*",
    element: <Home/>,
    children: [
      {
        path: "apply",
        element: <ApplyJob/>,

      },
      {
        path: "",
        element: <HeroSection/>,
      }]
  },
  {
    path: "*",
    element: <Error/>,
  },
]);

export default router;
