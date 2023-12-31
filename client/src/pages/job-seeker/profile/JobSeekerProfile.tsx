import Input from "../../../components/input/Input.tsx";
import {FaPhone, FaUser} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";

const JobSeekerProfile = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 my-4'>
      <h1 className='text-center font-semibold text-xl'>Profile</h1>
      <div className='flex  items-center justify-center'>
        <div className='flex items-center justify-center gap-2 flex-wrap max-w-[500px] min-w-[250px]'>
          <div className=' rounded-full h-96 w-96 cursor-pointer'>
            <img
              className='object-contain'
              src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg"
              alt="img"/>
          </div>
          <Input name={'email'} label={'Email'} type={'email'} placeholder={'Enter your email'} icon={<MdEmail/>}
                 optional={true}/>
          <div className='flex  gap-4'>
            <Input name={'fName'} label={'First Name'} type={'text'} placeholder={'first name'} icon={<FaUser/>}
                   optional={true}/>
            <Input name={'lName'} label={'Last Name'} type={'text'} placeholder={'last name'} icon={<FaUser/>}
                   optional={true}/>
          </div>
          <Input name={'jobSeekerContact'} label={'Job Seeker Contact'} type={'text'}
                 placeholder={'job seeker contact +94*********'} optional={true}
                 icon={<FaPhone/>
                 }/>
          <Input name={'username'} label={'Username'} type={'username'} placeholder={'Enter your username'}
                 icon={<FaUser/>} optional={true}/>
          <Input name={'currentPassword'} label={'Password'} type={'password'} placeholder={'Enter your current Password'}
                 optional={true}
                 icon={<RiLockPasswordFill/>
                 }/>
          <Input name={'newPassword'} label={'New Password'} type={'newPassword'}
                 placeholder={'New password'} icon={<RiLockPasswordFill/>
          } optional={true}/>

          <select id="jobType"
                  className="block w-full py-2  text-sm focus:outline-none border-b-2 border-slate-300 hover:border-blue-400 mt-8 mb-2">
            <option selected>Preferred Category</option>
            <option value="">Information Technology</option>
            <option value="">Accounting</option>
            <option value="">Hospitality & Tourism</option>
          </select>
          <select id="jobType"
                  className="block w-full py-2  text-sm focus:outline-none border-b-2 border-slate-300 hover:border-blue-400  mt-8 mb-2">
            <option selected>Sub Category</option>
            <option value="">Software Engineer</option>
            <option value="">BA</option>
            <option value="">UI/UX Engineer</option>
          </select>
          <div className='flex gap-4 flex-col w-full mt-8 mb-2'>
            <label htmlFor="cv">Upload your new CV</label>
            <input id='cv' type='file'/>
          </div>
          <button className='bg-slate-400 px-8 py-4 text-white my-4 rounded-md hover:opacity-80 active:opacity-50 mt-8 mb-2'>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerProfile;