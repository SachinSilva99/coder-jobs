import Input from "../../../components/input/Input.tsx";
import {FaSuitcase} from "react-icons/fa";

function MakeVacancy() {
  return (
    <div className='px-4 md:px-8 lg:px-16 min-h-[90vh]'>
      <h1 className='text-2xl font-semibold my-4'>Make Vacancy</h1>
      <div className='my-2'>
        <Input name={'jobTitle'} label={'Job Title'} type={'text'} placeholder={'Enter job title'}
               icon={<FaSuitcase/>}/>
        <div className='flex gap-1 flex-col md:flex-row md:gap-6'>
          <select id="category"
                  className="block p-2 my-4 text-sm focus:outline-none border-b-2 border-slate-300">
            <option selected>Category</option>
            <option value="IT">IT</option>
            <option value="FINANCE">Finance</option>
            <option value="HR">Hr</option>
          </select>
          <select id="subCategory"
                  className="block p-2 my-4 text-sm focus:outline-none border-b-2 border-slate-300">
            <option selected>Sub Category</option>
            <option value="IT">Software</option>
            <option value="FINANCE">Mobile</option>
            <option value="HR">DESKTOP</option>
          </select>
          <select id="jobType"
                  className="block  p-2 my-4 text-sm focus:outline-none border-b-2 border-slate-300">
            <option selected>Job Type</option>
            <option value="fullTime">Full Time</option>
            <option value="PartTime">Part Time</option>
            <option value="contract">Contract</option>
          </select>
          <select id="modality"
                  className="block  p-2 my-4 text-sm focus:outline-none border-b-2 border-slate-300">
            <option selected>Modality</option>
            <option value="inSite">In-Site</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
        <div>
         <textarea className={'w-full outline-none border border-blue-400 min-h-[40vh] p-4'}>

         </textarea>
        </div>
        <div className={'flex gap-2 flex-col md:flex-row'}>
        <Input name={'salary'} label={'Salary'} type={'text'} optional={true}/>
        <Input name={'startingDate'} label={'Starting Date'} type={'date'} placeholder={'Enter date'}/>
        <Input name={'endingDate'} label={'Ending Date'} type={'date'} placeholder={'Enter date'}/>
        </div>
      <button className={'bg-slate-400 px-6 py-3 my-4 text-white rounded-md'}>Create Vacancy</button>
      </div>
    </div>
  );
}

export default MakeVacancy;
