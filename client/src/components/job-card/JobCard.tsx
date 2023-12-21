import {IoLocationSharp} from "react-icons/io5";
import {FaMoneyBill, FaSuitcase} from "react-icons/fa";
import {SiHashnode} from "react-icons/si";

const JobCard = () => {
  return (
    <div
      className='border border-slate-300 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300'>
      <div className='p-4 flex lg:flex-row gap-2 flex-col  rounded-md'>
        <div>
          <div className='flex justify-between  items-center'>
            <h1 className='xl font-semibold'>
              Data Engineer
            </h1>
            <img className='w-20'
                 src="data:image/jpeg;base64,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"
                 alt=""/>
          </div>
          <h2>Surge Global</h2>
          <div className='flex-col gap-4 justify-center items-center'>
            <div className='flex gap-2'>
              <IoLocationSharp/>
              <p className='text-cyan-500'>Colombo, Sri Lanka</p>
            </div>
          </div>
          <p>Information & Communication Technology
            {'>'} Engineer </p>
        </div>
        {/*button and icons*/}
        <div className='flex flex-col md:flex-row  md:justify-between flex-1 md:items-center py-3 px-2 gap-4'>
          <div
            className='flex flex-wrap flex-row md:flex-col lg:justify-center lg:items-center flex-1 md:gap-4 text-xs md:text-sm gap-4 '>
            <div className='flex gap-3 items-center '>
              <FaSuitcase/>
              <p className='inline'>Full Time</p>
            </div>
            <div className='flex gap-3 items-center'>
              <SiHashnode/>
              <p>In-Office</p>
            </div>
            <div className='flex gap-3 items-center'>
              <FaMoneyBill/>
              <p><span>Rs : </span>300k</p>
            </div>
          </div>
          <button className='w-28 md:w-48 md:px-6 md:py-3 text-sm bg-emerald-600 text-white px-2 py-2 rounded-lg '>
            Apply
          </button>
        </div>
      </div>
      <p className='text-right text-sm md:text-md  pr-8 pb-2 text-slate-400'>10 mins ago</p>
    </div>
  );
};


export default JobCard;