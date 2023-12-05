import {createBrowserRouter} from "react-router-dom";
import Login from "./Login.tsx";
import Register from "./Register.tsx";
import Error from "./Error.tsx";
import Home from "./Home.tsx";
import Test1 from "./Test1.tsx";
import Test2 from "./Test2.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },

  {
    path: "/login",
    element: <Login/>,
  },

  {
    path: "/register",
    element: <Register/>,
  },

  {
    path: "/home/*",
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
