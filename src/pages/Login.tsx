import loginimg from "../assets/loginimg.png";
const Login = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="left md:w-1/2 flex flex-col items-start justify-start min-w-400 sm:w-screen">
        <h1 className="p-7">Coder Jobs</h1>
        <div className="flex items-center justify-center  w-full h-full">
          <div className=" flex items-start flex-col w-9/12	h-2/3">
            <h1 className="font-bold mb-5">Sign in</h1>
            <p>If you don't have an account register</p>
            <p>
              You can <span className="text-blue-900">Register here !</span>
            </p>
            <label className="mt-6" htmlFor="email">
              Email
            </label>
            <input
              className="border-b-2 outline-none  mt-1 focus:border-blue-300 w-full"
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
            <label className="mt-6" htmlFor="password">
              Password
            </label>
            <input
              className="focus:border-blue-300 border-b-2 outline-none mt-1 w-full"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
            <a className="self-end text-zinc-600" href="#">
              Forgot password?
            </a>
            <button className="bg-blue-900 w-full p-4 text-white rounded-full mt-6">
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="hidden right bg-test w-1/2 min-w-400 rounded-xl m-6 md:block">
        <p className="text-white self-end text-end p-4">+94 0116 789 754</p>
        <div className="flex  flex-col items-center justify-center">
          <img src={loginimg} />
          <h1 className="text-white text-xl font-semibold">
            Sign in to Coder Jobs
          </h1>
          <h3 className="text-white text-xs">Find your jon sooner</h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
