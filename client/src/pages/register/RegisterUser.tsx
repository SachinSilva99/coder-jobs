import {Link, useLocation} from "react-router-dom";
import Input from "../../components/input/Input.tsx";
import {MdEmail} from "react-icons/md";
import {FaUser} from "react-icons/fa";
import {RiLockPasswordFill} from "react-icons/ri";
import loginimg from "../../assets/loginimg.png";
import logo from "../../assets/logo.png";
import {z} from 'zod';
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {signUp} from "../../service/company/AuthService.ts";

type userType = {
  userType: string
}

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
})
type FormFields = z.infer<typeof schema>;

const RegisterUser = () => {
  const methods = useForm<FormFields>({resolver: zodResolver(schema)});
  const {errors, isLoading} = methods.formState;
  const location = useLocation();
  const isCompany = location.state.isCompany;
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    if (isCompany) {
      // @ts-ignore
      data.userType = "COMPANY";
    } else {
      // @ts-ignore
      data.userType = "JOB_SEEKER";
    }
    console.log(data)
    const res = await signUp(data);
    console.log(res)
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
              <Input label={'Email'} type={'email'} placeholder={'Enter your email'}
                     icon={<MdEmail/>} name={'email'}/>
              {errors.email && (<div className='text-red-500'>{errors.email.message}</div>)}
              <div className='flex  gap-4'>
                <div className='w-full'>
                  <Input name={'fName'} label={'First Name'} type={'text'} placeholder={'first name'} icon={<FaUser/>}/>
                  {errors.fName && (<div className='text-red-500'>{errors.fName.message}</div>)}
                </div>
                <div className='w-full'>
                  <Input label={'Last Name'} type={'text'}
                         placeholder={'last name'} icon={<FaUser/>} name={'lName'}/>
                  {errors.lName && (<div className='text-red-500'>{errors.lName.message}</div>)}
                </div>


              </div>
              <Input name={'username'} label={'Username'} type={'username'}
                     placeholder={'Enter your username'}
                     icon={<FaUser/>}/>
              {errors.username && (<div className='text-red-500'>{errors.username.message}</div>)}

              <Input name={'password'} label={'Password'} type={'password'}
                     placeholder={'Enter your password'}
                     icon={<RiLockPasswordFill/>
                     }/>
              {errors.password && (<div className='text-red-500'>{errors.password.message}</div>)}

              <Input name={'confirmPassword'} label={'Confirm Password'}
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
