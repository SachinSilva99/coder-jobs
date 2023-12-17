import {Link} from "react-router-dom";
import emailIcon from "../assets/email.png";
import passwordIcon from "../assets/password.png";
import Input from "./input/Input.tsx";

const LoginForm = () => {
  return (
    <div className=" flex items-start flex-col w-9/12	h-2/3">
      <h1 className="font-bold mb-5">Sign in</h1>
      <p>If you don't have an account register</p>
      <p>
        You can{" "}
        <Link to="/register" className="text-blue-900">
          Register here!
        </Link>
      </p>
      <Input name={'email'} label={'Email'} type={'email'} placeholder={'Enter your email'} icon={emailIcon}/>
      <Input name={'password'} label={'Password'} type={'password'} placeholder={'Enter your password'} icon={passwordIcon}/>

      <a className="self-end text-zinc-600" href="#">
        Forgot password?
      </a>
      <button className="bg-blue-900 w-full p-4 text-white rounded-full mt-2">
        Login
      </button>
    </div>
  );
};

export default LoginForm;