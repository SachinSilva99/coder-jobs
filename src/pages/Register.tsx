import loginimg from "../assets/loginimg.png";
import emailIcon from "../assets/email.png";
import passwordIcon from "../assets/password.png";
import userIcon from "../assets/user.png";

export const Register = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="left md:w-1/2 flex flex-col items-start justify-start min-w-400 sm:w-screen">
        <h1 className="p-7">Coder Jobs</h1>
        <div className="flex items-center justify-center  w-full h-full">
          <div className=" flex items-start flex-col w-9/12	">
            <h1 className="font-bold mb-5">Sign up</h1>
            <p>If you already have an account register</p>
            <p>
              You can{" "}
              <a href="#">
                <span className="text-blue-900">Login here!</span>
              </a>
            </p>
            <label className="mt-6" htmlFor="email">
              Email
            </label>
            <div className="relative w-full">
              <img
                className="absolute m-2"
                src={emailIcon}
                alt="email icon"
                loading="lazy"
              />
              <input
                className="pl-10 border-b-2 outline-none  mt-1 focus:border-blue-300 w-full"
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email address"
              />
            </div>
            <label className="mt-6" htmlFor="password">
              Username
            </label>
            <div className="relative w-full">
              <img
                className="absolute m-2"
                src={userIcon}
                alt="user icon"
                loading="lazy"
              />

              <input
                className="pl-10 focus:border-blue-300 border-b-2 outline-none mt-1 w-full"
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
              />
            </div>

            <label className="mt-6" htmlFor="password">
              Password
            </label>
            <div className="relative w-full">
              <img
                className="absolute m-2"
                src={passwordIcon}
                alt="password icon"
                loading="lazy"
              />

              <input
                className="pl-10 focus:border-blue-300 border-b-2 outline-none mt-1 w-full"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <label className="mt-6" htmlFor="password">
              Confirm Password
            </label>
            <div className="relative w-full">
              <img
                className="absolute m-2"
                src={passwordIcon}
                alt="password icon"
                loading="lazy"
              />

              <input
                className="pl-10 focus:border-blue-300 border-b-2 outline-none mt-1 w-full"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm your password"
              />
            </div>

            <a className="self-end text-zinc-600" href="#">
              Forgot password?
            </a>
            <button className="bg-blue-900 w-full p-4 text-white rounded-full mt-6">
              Register
            </button>
          </div>
        </div>
      </div>
      <div className="hidden right bg-test w-1/2 min-w-400 rounded-xl m-6 md:block">
        <p className="text-white self-end text-end p-4">+94 8364 473 862</p>
        <div className="flex  flex-col items-center justify-center">
          <img src={loginimg} loading="lazy" />
          <h1 className="text-white text-xl font-semibold">
            Sign in to Coder Jobs
          </h1>
          <h3 className="text-white text-xs">Find your job/employee sooner</h3>
        </div>
      </div>
    </div>
  );
};
