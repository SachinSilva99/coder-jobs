import {Link} from "react-router-dom";
import {IoMenu} from "react-icons/io5";


const GuestHeader = () => {
  return (
    <header className='flex h-16 justify-between px-4 pd:px-8 lg:px-16 '>
      <div className="left-nav flex items-center justify-start">
        <h1 className='text-3xl'> Job Seeker</h1>
      </div>
      <div className="right-nav  items-center justify-between  gap-8 hidden md:flex">
        <Link className="mt-2 flex custom-nav-hover" to='#'>
          <i className="fa-solid fa-upload"></i>
          Post a Job
        </Link>
        <Link className="mt-2 custom-nav-hover" to='/login'>Login</Link>
        <Link to='/register'>
          <button className="bg-btnBlue w-40 p-2 text-white mt-2">
            Register
          </button>
        </Link>
      </div>
      <div className='md:hidden cursor-pointer'>
        <IoMenu size={50}/>
      </div>
    </header>
  );
};

export default GuestHeader;