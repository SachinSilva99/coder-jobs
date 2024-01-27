import {Link, useLocation, useNavigate} from "react-router-dom";
import {MdEmail} from "react-icons/md";
import {FaUser} from "react-icons/fa";
import {RiLockPasswordFill} from "react-icons/ri";
import loginimg from "../../assets/loginimg.png";
import logo from "../../assets/logo.png";
import {z} from 'zod';
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {signUp} from "../../service/user/AuthService.ts";
import InputControl from "../../components/input/InputControl.tsx";
import {useEffect} from "react";
import {FcGoogle} from "react-icons/fc";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {app} from "../../firebase/Firebase.ts";
import { signWithGoogle} from "../../service/API_Service.ts";



const schema = z.object({
  email: z.string().email(),
  fName: z.string().min(3),
  lName: z.string().min(3),
  username: z.string().min(4).max(50),
  password: z
    .string()
    .min(8)
    .regex(/^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/, {
      message: "Password must contain at least one uppercase letter and one symbol",
    }),
  confirmPassword: z
    .string()
    .min(8)
    .regex(/^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/, {
      message: "Password must contain at least one uppercase letter and one symbol",
    }),
  userType: z.string()
})
type FormFields = z.infer<typeof schema>;

const RegisterUser = () => {
  const navigate = useNavigate();
  const methods = useForm<FormFields>({resolver: zodResolver(schema), defaultValues: {userType: 'JOB_SEEKER'}});
  const {errors, isLoading} = methods.formState;
  const location = useLocation();
  const type = location.state?.type;
  /**
   * if no user type then return to home page
   */
  useEffect(() => {
    if (!type) {
      navigate('/');
    }
  }, []);

  /**
   * Submit User
   */
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    if (type === 'COMPANY') {
      data.userType = type;
      const userId = await signUp(data);
      navigate('company', {state: {id: userId}});
    } else if (type === 'JOB_SEEKER') {
      data.userType = type;
      const userId = await signUp(data);
      navigate('job-seeker', {state: {id: userId}});
    }
  }
  const googleBtnOnClick = async () => {
    /**
     * type comes with home page which means it is 'COMPANY' or 'JOB_SEER'
     */
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const formData = {
        fName: result.user.displayName,
        email: result.user.email,
        avatar: result.user.photoURL,
        userType: type
      }
      const userId = await signWithGoogle(formData);
      if (type === 'COMPANY') {
        navigate('company', {state: {id: userId}})
      } else if (type === 'JOB_SEEKER') {
        navigate('job-seeker', {state: {id: userId}})
      }
    } catch (er) {
      console.log("couldn't sign in google", er);
    }
  }
  return (
    <div className="flex min-h-[100vh] px-2 pd:mx-8 lg:px-16">
      <div className="left flex flex-col min-w-400 max-w-[800px] flex-1">
        <div className=" flex items-center justify-start my-4">
          <img className='' src={logo} alt=""/>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold mb-5 text-xl">Sign up</h1>
          <p>If you already have an account register</p>
          <p>
            You can{" "}
            <Link to="/login">
              <span className="text-blue-700">Login here!</span>
            </Link>
          </p>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <InputControl label={'Email'} type={'email'} placeholder={'Enter your email'}
                            icon={<MdEmail/>} name={'email'}/>
              {errors.email && (<div className='text-red-500'>{errors.email.message}</div>)}
              <div className='flex  gap-4'>
                <div className='w-full'>
                  <InputControl name={'fName'} label={'First Name'} type={'text'} placeholder={'first name'}
                                icon={<FaUser/>}/>
                  {errors.fName && (<div className='text-red-500'>{errors.fName.message}</div>)}
                </div>
                <div className='w-full'>
                  <InputControl label={'Last Name'} type={'text'}
                                placeholder={'last name'} icon={<FaUser/>} name={'lName'}/>
                  {errors.lName && (<div className='text-red-500'>{errors.lName.message}</div>)}
                </div>
              </div>
              <InputControl name={'username'} label={'Username'} type={'username'}
                            placeholder={'Enter your username'}
                            icon={<FaUser/>}/>
              {errors.username && (<div className='text-red-500'>{errors.username.message}</div>)}

              <InputControl name={'password'} label={'Password'} type={'password'}
                            placeholder={'Enter your password'}
                            icon={<RiLockPasswordFill/>
                            }/>
              {errors.password && (<div className='text-red-500'>{errors.password.message}</div>)}

              <InputControl name={'confirmPassword'} label={'Confirm Password'}
                            type={'password'}
                            placeholder={'Confirm your password'} icon={<RiLockPasswordFill/>
              }/>
              {errors.confirmPassword && (<div className='text-red-500'>{errors.confirmPassword.message}</div>)}
              <div className={'flex flex-col'}>
                <Link className="self-end text-zinc-600 my-4" to="/#">
                  Forgot password?
                </Link>
                <button type='submit' disabled={isLoading}
                        className="bg-blue-900 mx-2 md:p-4 text-white rounded-full m-6">
                  {isLoading ? "Registering..." : "Register"}
                </button>
                <div className='flex items-center justify-center my-4 flex-col '>
                  <div className='cursor-pointer' onClick={googleBtnOnClick}>
                    <FcGoogle size={50}/>
                  </div>
                  <p className='text-sm'>Register with google</p>
                </div>
              </div>
              {errors.root && (<div className='text-red-500'>{errors.root.message}</div>)}
            </form>
          </FormProvider>
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
