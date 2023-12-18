import {createBrowserRouter} from "react-router-dom";
import Login from "./login/Login.tsx";
import Register from "./register/Register.tsx";
import Error from "./error/Error.tsx";
import Home from "./home/Home.tsx";
import Test1 from "./Test1.tsx";
import Test2 from "./Test2.tsx";

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
        path: "test1",
        element: <Test1/>,

      },
      {
        path: "test2",
        element: <Test2/>,
      }]
  },
  {
    path: "*",
    element: <Error/>,
  },
]);

export default router;
