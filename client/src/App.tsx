import {RouterProvider} from "react-router-dom";
import router from "./pages/Routes.tsx";
import Footer from "./components/layout/Footer.tsx";


function App() {
  return (
    <>
      <RouterProvider router={router}/>
      <Footer/>
    </>
  );
}

export default App;
