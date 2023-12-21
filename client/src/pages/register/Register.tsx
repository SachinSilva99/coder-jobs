import loginimg from "../../assets/loginimg.png";
import emailIcon from "../../assets/email.png";
import passwordIcon from "../../assets/password.png";
import userIcon from "../../assets/user.png";
import {Link} from "react-router-dom";
import Input from "../../components/input/Input.tsx";

const Register = () => {
  return (
    <div className="flex">
      <div className="left md:w-1/2 flex flex-col items-start justify-start min-w-400 sm:w-screen">
        <h1 className="p-7">Job Seeker</h1>
        <div className="flex items-center justify-center  w-full h-full">
          <div className=" flex items-start flex-col w-9/12	">
            <h1 className="font-bold mb-5">Sign up</h1>
            <p>If you already have an account register</p>
            <p>
              You can{" "}
              <Link to="/login">
                <span className="text-blue-900">Login here!</span>
              </Link>
            </p>
            <Input name={'email'} label={'Email'} type={'email'} placeholder={'Enter your username'} icon={emailIcon}/>
            <Input name={'username'} label={'Username'} type={'username'} placeholder={'Enter your username'}
                   icon={userIcon}/>
            <Input name={'password'} label={'Password'} type={'password'} placeholder={'Enter your password'}
                   icon={passwordIcon}/>
            <Input name={'confirmPassword'} label={'Confirm Password'} type={'confirmPassword'}
                   placeholder={'Confirm your password'} icon={passwordIcon}/>
            <Link className="self-end text-zinc-600" to="/#">
              Forgot password?
            </Link>
            <button className="bg-blue-900 w-full p-4 text-white rounded-full m-6">
              Register
            </button>
          </div>
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
export default Register;