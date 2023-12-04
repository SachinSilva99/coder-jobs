import {RouterProvider} from "react-router-dom";
import router from "./pages/Routes.tsx";


function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
