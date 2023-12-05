import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <nav className='flex w-full h-16 '>
      <div className="left-nav flex items-center justify-start w-1/4 ml-10">
        <h1>Coders Job</h1>
      </div>
      <div className="right-nav flex items-center justify-end w-3/4  gap-8 mr-10">

        <Link className="mt-2 flex" to='#'><i className="fa-solid fa-upload"></i> Post a Job</Link>
        <Link className="mt-2" to='#'>Login</Link>
        <Link to='#'>
          <button className="bg-btnBlue w-40 p-2 text-white mt-2">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;