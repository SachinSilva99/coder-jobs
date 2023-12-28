import Input from "../../../components/input/Input.tsx";
import {FaUser} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";

const JobSeekerProfile = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 my-4'>
      <h1 className='text-center text-xl'>Profile</h1>
      <div className='flex items-center justify-center  '>
        <div className='flex items-center justify-center flex-col max-w-[500px] min-w-[250px]'>
          <div className=' rounded-full h-96 w-96 cursor-pointer hover:border-blue-400 border border-transparent'>
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
          <Input name={'username'} label={'Username'} type={'username'} placeholder={'Enter your username'}
                 icon={<FaUser/>} optional={true}/>
          <Input name={'password'} label={'Password'} type={'password'} placeholder={'Enter your password'}
                 optional={true}
                 icon={<RiLockPasswordFill/>
                 }/>
          <Input name={'confirmPassword'} label={'Confirm Password'} type={'confirmPassword'}
                 placeholder={'Confirm your password'} icon={<RiLockPasswordFill/>
          } optional={true}/>
          <button className='bg-slate-400 px-8 py-4 text-white my-4 rounded-md hover:opacity-80 active:opacity-50'>
            Update
          </button>
        </div>


      </div>
    </div>
  );
};

export default JobSeekerProfile;