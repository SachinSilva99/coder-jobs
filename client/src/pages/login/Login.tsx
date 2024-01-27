import loginimg from "../../assets/loginimg.png";

import {Link, useNavigate} from "react-router-dom";
import Input from "../../components/input/Input.tsx";
import {MdEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";
import {useState} from "react";
import {isEmailValid, isPasswordValid} from "../../util/Validate.ts";
import Swal from "sweetalert2";
import {signInFailure, signInStart, signInSuccess} from "../../redux/user/UserSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/Store.ts";
import Cookies from "js-cookie";
import {loginUser, loginWithGoogle} from "../../service/API_Service.ts";
import {TOKEN} from "../../util/TOKEN.ts";
import {FcGoogle} from "react-icons/fc";
import {app} from "../../firebase/Firebase.ts";
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";


const Login = () => {
  const [formData, setFormData] = useState<{ email: string, password: string }>({email: "", password: ""});
  const [errors, setErrors] = useState<{ email: string; password: string }>({email: "", password: ""});
  const {loading, error} = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validateInput = (id: string, value: string) => {
    if (id === "email") {
      setErrors({...errors, email: isEmailValid(value) ? "" : "Invalid email address"});
    } else if (id === "password") {
      setErrors({
        ...errors,
        password: isPasswordValid(value)
          ? ""
          : "Password must be at least 6 characters long and contain at least one uppercase letter and one special character",
      });
    }
  };
  const handleOnChange = (e) => {
    const {id, value} = e.target;
    setFormData({...formData, [id]: value});
    validateInput(id, value);
  };

  async function loginBtnOnClick(e) {
    e.preventDefault();

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
    dispatch(signInStart());
    try {
      const userData = await loginUser(formData);
      Cookies.set(TOKEN, userData.accessToken);
      dispatch(signInSuccess(userData.user));
      Swal.fire({
        icon: "success",
        title: "Logged Successfully",
        text: `Welcome ${userData.user.username}`
      });
      if (userData.user.userType === "COMPANY") {
        navigate('/company');
      }

    } catch (error) {
      // setErrors(error);
      dispatch(signInFailure(error));
    }
  }

  const googleBtnOnClick = async () => {
    try {
      dispatch(signInStart());
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const formData = {
        fName: result.user.displayName,
        email: result.user.email,
        avatar: result.user.photoURL,
      }
      const userData = await loginWithGoogle(formData);
      Cookies.set(TOKEN, userData.accessToken);
      dispatch(signInSuccess(userData.user));
      if (userData.user.userType === "COMPANY") {
        navigate('/company');
      } else if (userData.user.userType === "JOB_SEEKER") {
        navigate('/job-seeker');
      }
    } catch (er) {
      console.log(er);
      dispatch(signInFailure(error));
    }
  }
  return (
    <div className="flex px-4 py-2 pd:mx-8 lg:px-16 min-h-[80vh] md:min-h-[100vh]">
      <div className="left flex flex-col md:w-[50vw]">
        <h1 className="text-2xl my-8">Job Seeker</h1>
        <div className='flex md:items-center md:justify-center h-full'>
          <div className='flex md:items-center md:justify-center w-full md:w-2/3 '>
            <form className="flex flex-col w-full h-full">
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
                optional={true}
              />
              <Input
                name={'password'}
                label={'Password'}
                type={'password'}
                placeholder={'Enter your password'}
                icon={<RiLockPasswordFill/>}
                onChange={handleOnChange}
                optional={true}
              />
              <a className="self-end text-zinc-600 my-4" href="#">
                Forgot password?
              </a>
              {errors.email && <p className="text-red-500 my-1 text-sm">{errors.email}</p>}
              {errors.password && <p className="text-red-500 my-1 text-sm">{errors.password}</p>}
              {error && <p className="text-red-500 my-1 text-sm">{error}</p>}
              <button onClick={loginBtnOnClick} className="bg-blue-900  p-4 text-white rounded-full mt-2">
                Login
              </button>
              <div className='flex items-center justify-center my-4 flex-col' onClick={googleBtnOnClick}>
                <div className='cursor-pointer' >
                  <FcGoogle size={50}/>
                </div>
                <p className='text-sm cursor-pointer'>Login with google</p>
              </div>
            </form>
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
