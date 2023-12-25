import {createBrowserRouter} from "react-router-dom";
import Login from "./login/Login.tsx";
import Register from "./register/Register.tsx";
import Error from "./error/Error.tsx";
import Home from "./home/Home.tsx";
import Admin from "./admin/Admin.tsx";
import Stats from "./admin/stats/Stats.tsx";
import Companies from "./admin/companies/Companies.tsx";
import Users from "./admin/users/Users.tsx";
import JobSeekers from "./admin/job-seekers/JobSeekers.tsx";
import JobSeekerSection from "./admin/job-seekers/JobSeekerSection.tsx";
import JobSeekerDetail from "./admin/job-seekers/JobSeekerDetail.tsx";
import JobSeeker from "./job-seeker/JobSeeker.tsx";
import Opportunities from "./home/opportunities/Opportunities.tsx";
import Submissions from "./home/submissions/Submissions.tsx";
import HomeHero from "./shared/HomeHero.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/admin",
    element: <Admin/>,
    children: [
      {
        path: "",
        element: <Stats/>,
      },
      {
        path: "users",
        element: <Users/>,
      },
      {
        path: "job-seekers",
        element: <JobSeekerSection/>,
        children: [
          {
            path: "",
            element: <JobSeekers/>,
          },
          {
            path: ":id",
            element: <JobSeekerDetail/>,
          },
        ]
      }, {
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
    path: "/",
    element: <Home/>,
  },
  {
    path:'/job-seeker',
    element: <JobSeeker/>,
    children:[
      {
        path: "",
        element: <HomeHero/>,
      },
      {
        path: "opportunities",
        element: <Opportunities/>,
      },
      {
        path: "submissions",
        element: <Submissions/>,
      },
    ]
  },
  {
    path: "*",
    element: <Error/>,
  },
]);

export default router;
