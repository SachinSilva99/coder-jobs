import {Link} from "react-router-dom";
import {IoMenu} from "react-icons/io5";


const Navbar = () => {
  return (
    <nav className='flex w-full h-16 justify-between '>
      <div className="left-nav flex items-center justify-start">
        <h1>Coders Job</h1>
      </div>
      <div className="right-nav  items-center justify-between  gap-8 hidden md:flex">
        <Link className="mt-2 flex" to='#'><i className="fa-solid fa-upload"></i> Post a Job</Link>
        <Link className="mt-2" to='#'>Login</Link>
        <Link to='#'>
          <button className="bg-btnBlue w-40 p-2 text-white mt-2">
            Register
          </button>
        </Link>
      </div>
      <div className='md:hidden cursor-pointer'>
        <IoMenu size={50} />
      </div>

    </nav>
  );
};

export default Navbar;