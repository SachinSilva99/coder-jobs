import loginimg from "../../assets/loginimg.png";

import {Link} from "react-router-dom";
import Input from "../../components/input/Input.tsx";
import {MdEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";
import {useState} from "react";
import {isEmailValid, isPasswordValid} from "../../util/Validate.ts";
import Swal from "sweetalert2";

const Login = () => {
  const [formData, setFormData] = useState<{ email: string, password: string }>({email: "", password: ""});
  const [errors, setErrors] = useState<{ email: string; password: string }>({email: "", password: ""});
  const validateInput = (id: string, value: string) => {
    switch (id) {
      case "email":
        setErrors({...errors, email: isEmailValid(value) ? "" : "Invalid email address"});
        break;
      case "password":
        setErrors({
          ...errors,
          password: isPasswordValid(value)
            ? ""
            : "Password must be at least 6 characters long and contain at least one uppercase letter and one special character",
        });
        break;
      default:
        break;
    }
  };
  const handleOnChange = (e: any) => {
    const {id, value} = e.target;
    setFormData({...formData, [id]: value});
    validateInput(id, value);
  };

  function loginBtnOnClick() {
    const emailValid = isEmailValid(formData.email);
    const passwordValid = isPasswordValid(formData.password);

    if (!emailValid || !passwordValid) {
      const errorMessage = `${!emailValid ? "Invalid email address. " : ""}
      ${!passwordValid ? "Password must be at least 6 characters long and contain at least one uppercase letter and one special character. " : ""}`;
      Swal.fire({
        icon: "error",
        title: "Invalid Inputs",
        text: errorMessage,
      });
      return;
    }
    // TODO: Send data to the backend
  }

  return (
    <div className="flex px-4 py-2 pd:mx-8 lg:px-16 min-h-[80vh] md:min-h-[100vh]">
      <div className="left flex flex-col md:w-[50vw]">
        <h1 className="text-2xl my-8">Job Seeker</h1>
        <div className='flex md:items-center md:justify-center h-full'>
          <div className='flex md:items-center md:justify-center w-full md:w-2/3 '>
            <div className="flex flex-col w-full h-full">
              <h1 className="font-bold mb-5 text-lg">Sign in</h1>
              <p>If you don't have an account register</p>
              <p>
                You can{" "}
                <Link to="/register" className="text-blue-600">
                  Register here!
                </Link>
              </p>
              <Input
                name={'email'}
                label={'Email'}
                type={'email'}
                placeholder={'Enter your email'}
                icon={<MdEmail/>}
                onChange={handleOnChange}
              />
              <Input
                name={'password'}
                label={'Password'}
                type={'password'}
                placeholder={'Enter your password'}
                icon={<RiLockPasswordFill/>}
                onChange={handleOnChange}
              />
              <a className="self-end text-zinc-600 my-4" href="#">
                Forgot password?
              </a>
              {errors.email && <p className="text-red-500 my-2 text-sm">{errors.email}</p>}
              {errors.password && <p className="text-red-500 my-2 text-sm">{errors.password}</p>}
              <button onClick={loginBtnOnClick} className="bg-blue-900  p-4 text-white rounded-full mt-2">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden right bg-test w-[50vw] min-w-400  py-4 md:block rounded-lg">
        <p className="text-white self-end text-end p-4">+94 8364 473 862</p>
        <div className="flex  flex-col items-center justify-center">
          <img src={loginimg} loading="lazy"/>
          <h1 className="text-white text-xl font-semibold">
            Sign in to Job Seeker
          </h1>
          <h3 className="text-white text-xs">Find your job | employee sooner</h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
