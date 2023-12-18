import Navbar from "../../components/Navbar.tsx";
import {FaFilter, FaSearch} from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Navbar/>
      <p className="text-lg mt-8 mb-4">
        Find your job now!
      </p>
      <div
        className='border-0 md:border-2 border-slate-300 flex
        flex-col md:flex-row gap-2 md:items-center justify-center  md:justify-between rounded-lg'>
        {/*search bar*/}
        <div className='flex gap-2'>
          <div className="relative mx-4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <FaSearch color={'#CDC7C7'}/>
              </span>
            <input
              className='pl-8 border-b-2 border-slate-300 min-w-[250px] lg:w-[300px] focus:outline-none'
              type="text"
              placeholder='Search job title or keywords'
            />
          </div>
          <div className='block md:hidden  cursor-pointer'>
            <FaFilter size={'40'} color={'#149BFC'}/>
          </div>
        </div>
        {/*filters*/}
        <div className={'gap-4 hidden items-center justify-center lg:flex mt-6'}>
          <div>
            <select id="jobType"
                    className="block w-full p-2 mb-6 text-sm focus:outline-none border-b-2 border-slate-300">
              <option selected>Job Type</option>
              <option value="US">Full Time</option>
              <option value="CA">Part Time</option>
              <option value="FR">Contract</option>
            </select>
          </div>
          <div className=''>
            <select id="modality"
                    className="block w-full p-2 mb-6 text-sm focus:outline-none border-b-2 border-slate-300">
              <option selected>Modality</option>
              <option value="US">In-Site</option>
              <option value="CA">Remote</option>
              <option value="FR">Hybrid</option>
            </select>
          </div>
          <div className=''>
            <select id="salaryRange"
                    className="block w-full p-2 mb-6 text-sm focus:outline-none border-b-2 border-slate-300">
              <option selected>Salary Range</option>
              <option value="US">20K - 100k</option>
              <option value="CA">100k - 500k</option>
              <option value="FR">more than 1000K</option>
            </select>
          </div>
        </div>
        {/*search button and sort*/}
        <div>
          <div className='hidden items-center md:flex m-4'>
            <button className="bg-btnBlue h-[60px] w-40 text-white">
              Search
            </button>
            <div className='mx-4'>
              <select id="salaryRange"
                      className="block w-40 h-[60px]  text-sm focus:outline-none border-2 border-slate-300 px-8">
                <option value="US">Newest</option>
                <option value="CA">Oldest</option>
              </select>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Home;