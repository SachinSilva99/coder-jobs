import {IoLocationSharp} from "react-icons/io5";
import {JobSeekerType} from "../../pages/company/CompanyHero.tsx";

interface Props {
  jobSeeker: JobSeekerType,
  offerOnClick: () => void
}


const JobSeekerCard = ({jobSeeker,offerOnClick}: Props) => {
  const {user} = jobSeeker;
  return (
    <div
      className='border border-slate-300 rounded-lg hover:bg-blue-100 hover:duration-500 cursor-pointer'>
      <div className='p-4 flex lg:flex-row gap-2 flex-col  rounded-md'>
        <div className=''>
          <img className='w-20 py-4'
               src={jobSeeker.avatar}
               alt=""/>
          <div className='flex justify-between  items-center'>
            <h1 className='xl font-semibold'>
              {jobSeeker.currentPosition}
            </h1>

          </div>
          <h2>{user.fName} {user.lName}</h2>
          <div className='flex-col gap-4 justify-center items-center'>
            <div className='flex gap-2'>
              <IoLocationSharp/>
              <p className='text-cyan-500'>Colombo, Sri Lanka</p>
            </div>
          </div>
          <p>{jobSeeker.category}
            {'>'} {jobSeeker.subCategory} </p>
          <p className='py-4'>{jobSeeker.about}</p>
        </div>
        {/*button and icons*/}
        <div className='flex flex-col md:flex-row  justify-end flex-1 md:items-center py-3 px-2 gap-4 '>
          <button onClick={() => offerOnClick()}
                  className='w-28 md:w-48 md:px-6 md:py-3 text-sm bg-emerald-600 text-white px-2 py-2 rounded-lg '>
            Offer Opportunity
          </button>
        </div>
      </div>
    </div>
  );
};


export default JobSeekerCard;
