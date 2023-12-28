import {Link} from "react-router-dom";
import Input from "../../components/input/Input.tsx";
import {MdEmail} from "react-icons/md";
import {FaUser} from "react-icons/fa";
import {RiLockPasswordFill} from "react-icons/ri";
import loginimg from "../../assets/loginimg.png";

const RegisterUser = () => {
  return (
    <div className="flex min-h-[80vh] px-2 pd:mx-8 lg:px-16">
      <div className="left flex flex-col min-w-400 max-w-[800px] flex-1">
        <h1 className="py-7 text-2xl">Job Seeker</h1>
        <div className="flex flex-col">
          <h1 className="font-bold mb-5">Sign up</h1>
          <p>If you already have an account register</p>
          <p>
            You can{" "}
            <Link to="/login">
              <span className="text-blue-900">Login here!</span>
            </Link>
          </p>
          <Input name={'email'} label={'Email'} type={'email'} placeholder={'Enter your email'} icon={<MdEmail/>}/>
          <div className='flex  gap-4'>
            <Input name={'fName'} label={'First Name'} type={'text'} placeholder={'first name'} icon={<FaUser/>}/>
            <Input name={'lName'} label={'Last Name'} type={'text'} placeholder={'last name'} icon={<FaUser/>}/>
          </div>
          <Input name={'username'} label={'Username'} type={'username'} placeholder={'Enter your username'}
                 icon={<FaUser/>}/>
          <Input name={'password'} label={'Password'} type={'password'} placeholder={'Enter your password'}
                 icon={<RiLockPasswordFill/>
                 }/>
          <Input name={'confirmPassword'} label={'Confirm Password'} type={'confirmPassword'}
                 placeholder={'Confirm your password'} icon={<RiLockPasswordFill/>
          }/>
          <Link className="self-end text-zinc-600 my-4" to="/#">
            Forgot password?
          </Link>
          <button className="bg-blue-900 mx-2 md:p-4 text-white rounded-full m-6">
            Register
          </button>
        </div>
      </div>
      <div className="hidden right bg-test w-1/2 min-w-400 rounded-xl m-6 md:block">
        <p className="text-white self-end text-end p-4">+94 8364 473 862</p>
        <div className="flex  flex-col items-center justify-center">
          <img src={loginimg} loading="lazy" alt={loginimg}/>
          <h1 className="text-white text-xl font-semibold">
            Sign in to Coder Jobs
          </h1>
          <h3 className="text-white text-xs">Find your job/employee sooner</h3>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;