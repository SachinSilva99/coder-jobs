import {Link} from "react-router-dom";
import {MdLogout} from "react-icons/md";
import {IoMdSettings} from "react-icons/io";


const AdminHeader = () => {
  return (
    <header className='flex w-full h-16 justify-between px-4 pd:mx-8 lg:px-16'>
      <div className="left-nav flex items-center justify-start">
        <h1 className='text-3xl'> Job Seeker</h1>
      </div>
      <div className="right-nav  items-center justify-between  gap-8 hidden md:flex">
        <Link to=''>
          <div className='custom-nav-hover'>Stats</div>
        </Link>
        <Link to='users'>
          <div className='custom-nav-hover'>Users</div>
        </Link>
        <Link to='job-seekers'>
          <div className='custom-nav-hover'>Job Seekers</div>
        </Link>
        <Link to='companies'>
          <div className='custom-nav-hover'>Companies</div>
        </Link>
        <Link to='companies'>
          <div className='custom-nav-hover'>Make new Admin</div>
        </Link>
        <Link to='companies' className='hover:text-blue-500'>
          <IoMdSettings size={25} />
        </Link>
        <Link to='#' className='hover:text-blue-500'>
          <MdLogout size={25}/>
        </Link>
      </div>
    </header>
  );
};

export default AdminHeader;