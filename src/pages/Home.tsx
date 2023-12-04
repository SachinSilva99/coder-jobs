import {Link, Outlet,} from "react-router-dom";


const Home = () => {
  return (
    <div>
       <ul>
         <Link to="/home/test1">test1</Link>
         <Link to="/home/test2">test2</Link>
       </ul>

      <Outlet />
    </div>
  );
};

export default Home;