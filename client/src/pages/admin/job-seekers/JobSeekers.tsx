import Input from "../../../components/input/Input.tsx";
import {FaSearch} from "react-icons/fa";


const JobSeekers = () => {
  return (
    <div className='px-4 pd:px-8 lg:px-16 min-h-[80vh]'>
      <h1 className='text-2xl text-cyan-700 my-4'>Job Seekers</h1>
      <div className='w-96 my-8'>
        <Input
          name={'jobSeekers'}
          label={'Search Job Seekers'}
          type={'text'}
          optional={true}
          placeholder={'search job seekers...'}
          icon={<FaSearch/>
          }/>
      </div>
      {/*job seekers lis*/}
      <div className='flex flex-row gap-4 flex-wrap '>
        {/*job seeker card*/}
        <div className='p-4 md:p-8 border border-slate-300 cursor-pointer hover:border-blue-400'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl'>Username : <span className='text-blue-400'>sachinsilva</span></h1>
            <h2>First name : <span>sachin</span></h2>
            <h2>Last name : <span>Silva</span></h2>
            <h2 className='text-sm'>Category : <span>Information & Communication Technology {'>'} Engineer</span></h2>
          </div>
        </div>
        <div className='p-4 md:p-8 border border-slate-300 cursor-pointer hover:border-blue-400'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl'>Username : <span className='text-blue-400'>sachinsilva</span></h1>
            <h2>First name : <span>sachin</span></h2>
            <h2>Last name : <span>Silva</span></h2>
            <h2 className='text-sm'>Category : <span>Information</span></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekers;