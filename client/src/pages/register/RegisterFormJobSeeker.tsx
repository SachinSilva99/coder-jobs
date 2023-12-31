import logo from "../../assets/logo.png";
import Input from "../../components/input/Input.tsx";
import {FaPhone} from "react-icons/fa";


const RegisterFormJobSeeker = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 my-4'>
      <div className="flex items-center justify-center my-4">
        <img className='' src={logo} alt=""/>
      </div>
      <h1 className='text-center font-semibold text-xl'>Profile</h1>
      <div className='flex  items-center justify-center'>
        <div className='flex items-center justify-center flex-wrap max-w-[500px] min-w-[250px]'>
          <div className=' rounded-full h-96 w-96 cursor-pointer'>
            <img
              className='object-contain'
              src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg"
              alt="img"/>
          </div>
          <select id="jobType"
                  className="block w-full py-2  text-sm focus:outline-none
                   border-b-2 border-slate-300 hover:border-blue-400 mt-8 mb-2">
            <option selected>Preferred Category</option>
            <option value="">Information Technology</option>
            <option value="">Accounting</option>
            <option value="">Hospitality & Tourism</option>
          </select>
          <select id="jobType"
                  className="block w-full py-2  text-sm focus:outline-none
                  border-b-2 border-slate-300 hover:border-blue-400  mt-8 mb-2">
            <option selected>Sub Category</option>
            <option value="">Software Engineer</option>
            <option value="">BA</option>
            <option value="">UI/UX Engineer</option>
          </select>
          <div className='flex gap-4 flex-col w-full mt-8 mb-2'>
            <label htmlFor="resume">Upload your Resume</label>
            <input id='resume' type='file'/>
          </div>
          <Input name={'jobSeekerContact'} label={'Job Seeker Contact'} type={'text'}
                 placeholder={'job seeker contact +94*********'}
                 icon={<FaPhone/>
                 }/>
          <button
            className='bg-slate-400 px-8 py-4 text-white my-4 rounded-md hover:opacity-80 active:opacity-50 mt-8 mb-2'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterFormJobSeeker;