import {createBrowserRouter} from "react-router-dom";
import Login from "./login/Login.tsx";
import Register from "./register/Register.tsx";
import Error from "./error/Error.tsx";
import Home from "./home/Home.tsx";
import HeroSection from "./home/HeroSection.tsx";
import ApplyJob from "./home/apply/ApplyJob.tsx";

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login/>,
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
