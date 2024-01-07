import {IoLocationSharp} from "react-icons/io5";
import {FaEye} from "react-icons/fa";

const ApplicationCard = () => {
  return (
    <div className='border border-slate-300 rounded-lg hover:bg-blue-100 hover:duration-500 cursor-pointer'>
      <div className='flex flex-row items-center  p-4 gap-4'>
        {/*img */}
        <div className='m-4 w-20'>
          <img src="https://99x.io/static/a5a3c714a21efd6fab974c1b581dd37f/e9a79/author_99x.png" alt="img"/>
        </div>
        {/*detail*/}
        <div className='flex justify-between w-full'>
          <div>
            <h1 className=' font-semibold'>Intern Full Stack Developer</h1>
            <h2>99x</h2>
            <div className='flex gap-2'>
              <IoLocationSharp/>
              <p className='text-cyan-500'>Colombo, Sri Lanka</p>
            </div>
          </div>
          <div className='border border-green-600 flex items-center justify-center px-6 py-4'>
            <div className='flex gap-2'>
              <p>Viewed</p>
              <FaEye/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
