import Input from "../../components/input/Input.tsx";
import {FaUser} from "react-icons/fa";
import logo from "../../assets/logo.png";

const RegisterFormCompany = () => {
  return (

    <div className='px-4 md:px-8 lg:px-16 my-4'>
      <div className="my-4 flex items-center justify-start ">
        <img className='' src={logo} alt=""/>
      </div>
      <h1 className='text-center font-semibold text-xl'>Company</h1>
      <div className='flex  items-center justify-center'>
        <div className='flex items-center justify-center flex-wrap max-w-[500px] min-w-[250px]'>
          <div className=' rounded-full h-96 w-96 cursor-pointer'>
            <img
              className='object-contain'
              src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg"
              alt="img"/>
          </div>
          <Input name={'companyName'} label={'Company Name'} type={'text'} placeholder={'company name'}
                 icon={<FaUser/>}/>
          <div className='flex  items-center w-full my-4'>
            <label htmlFor="companySize">Company Size (Employees)</label>
            <select id="companySize"
                    className="block w-full py-2  text-sm focus:outline-none border-b-2 border-slate-300 hover:border-blue-400  mt-8 mb-2">
              <option selected>Company Size (Employees)</option>
              <option value="">1 - 10</option>
              <option value="">10 - 100</option>
              <option value="">100 - 500</option>
              <option value="">500+</option>
            </select>
          </div>
          <button
            className='bg-slate-400 px-8 py-4 text-white my-4 rounded-md hover:opacity-80 active:opacity-50 mt-8 mb-2'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterFormCompany;