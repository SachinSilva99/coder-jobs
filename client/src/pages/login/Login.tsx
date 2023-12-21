import loginimg from "../../assets/loginimg.png";

import LoginForm from "../../components/LoginForm.tsx";

const Login = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="left md:w-1/2 flex flex-col items-start justify-start min-w-400 sm:w-screen">
        <h1 className="p-7">Job Seeker</h1>
        <div className="flex items-center justify-center  w-full h-full">
          <LoginForm/>
        </div>
      </div>
      <div className="hidden right bg-test w-1/2 min-w-400 rounded-xl m-6 md:block">
        <p className="text-white self-end text-end p-4">+94 8364 473 862</p>
        <div className="flex  flex-col items-center justify-center">
          <img src={loginimg} loading="lazy"/>
          <h1 className="text-white text-xl font-semibold">
            Sign in to Job Seeker
          </h1>
          <h3 className="text-white text-xs">Find your job/employee sooner</h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
