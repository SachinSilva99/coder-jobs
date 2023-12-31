import {FaBuilding, FaMoneyBill} from "react-icons/fa";
import {FaPeopleGroup} from "react-icons/fa6";

const Stats = () => {
  return (
    <div className='px-4 pd:mx-8 lg:px-16 min-h-[90vh]'>
      <h1 className='text-2xl text-slate-600 my-4'>Stats</h1>
      {/*stats*/}
      <div className='flex gap-2 flex-wrap'>
        <div className='border w-full md:w-[250px] flex gap-4 px-4 py-2 my-2'>
          <FaMoneyBill size={50}/>
          <div className='flex flex-col '>
            <h2 className='text-emerald-500 text-lg'>Total Earnings</h2>
            <p>$1000</p>
          </div>
        </div> <div className='border w-full md:w-[250px] flex gap-4 px-4 py-2 my-2'>
        <FaPeopleGroup size={50} />
        <div className='flex flex-col '>
            <h2 className='text-emerald-500 text-lg'>Job Seekers</h2>
            <p>250</p>
          </div>
        </div> <div className='border w-full md:w-[250px] flex gap-4 px-4 py-2 my-2'>
        <FaBuilding size={50} />
          <div className='flex flex-col '>
            <h2 className='text-emerald-500 text-lg'>Companies</h2>
            <p>20</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;