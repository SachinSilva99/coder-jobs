import {Link} from "react-router-dom";
import {MdLogout} from "react-icons/md";
import logo from "../../assets/logo.png";


const CompanyHeader = () => {
  return (
    <header className='flex w-full h-[10vh] justify-between px-4 pd:mx-8 lg:px-16'>
      <div className="left-nav flex items-center justify-start ">
        <img className='h-20' src={logo} alt=""/>
      </div>
      <div className="right-nav  items-center justify-between  gap-8 hidden md:flex">
        <Link to=''>
          <div className='custom-nav-hover'>Job Seekers</div>
        </Link>
        <Link to='opportunities'>
          <div className='custom-nav-hover'>Opportunities</div>
        </Link>
        <Link to='submissions'>
          <div className='custom-nav-hover'>Submissions</div>
        </Link>
        <Link to='profile'>
          <div className='custom-nav-hover rounded-full h-10 w-10'>
            <img
              src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg"
              alt="img"/>
          </div>
        </Link>
        <Link to='/' className='hover:text-blue-500'>
          <MdLogout size={25}/>
        </Link>
      </div>
    </header>
  );
};

export default CompanyHeader;