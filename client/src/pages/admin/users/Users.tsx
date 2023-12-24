import Input from "../../../components/input/Input.tsx";
import {FaSearch} from "react-icons/fa";

const Users = () => {
  return (
    <div className='px-4 pd:px-8 lg:px-16 min-h-[80vh]'>
      <h1 className='text-2xl'>Users</h1>
      <div className='w-96 my-8'>
        <Input
          name={'users'}
          label={'Search Users'}
          type={'text'}
          optional={true}
          placeholder={'search users...'}
          icon={<FaSearch/>
          }/>
      </div>
      <div className='flex my-4 gap-4 flex-wrap flex-col md:flex-row'>
        {/*user card*/}
        <div className='p-4 md:p-8 border border-slate-300'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl'>Username <span className='text-blue-400'>sachinsilva</span></h1>
            <h1>First name : <span>sachin</span></h1>
            <h1>Last name : <span>Silva</span></h1>
            <p>Access : <span className='text-green-500'>Available</span></p>
            <p>Type : <span className='font-bold'>Job Seeker</span></p>
          </div>
          <div className='text-white flex gap-4 my-2 '>
            <button className='bg-red-400 px-4 py-2'>Block</button>
          </div>
        </div>  {/*job seeker card*/}
        <div className='p-4 md:p-8 border border-slate-300'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl'>User name : <span className='text-blue-400'>sachinsilva</span></h1>
            <h1>First name : <span>sachin</span></h1>
            <h1>Last name : <span>Silva</span></h1>
            <p>Access : <span className='text-green-500'>Available</span></p>
            <p>Type : <span className='font-bold'>Job Seeker</span></p>
          </div>
          <div className='text-white flex gap-4 my-2 '>
            <button className='bg-red-400 px-4 py-2'>Block</button>
          </div>
        </div>
        {/*job seeker card*/}
        <div className='p-4 md:p-8 border border-slate-300'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl'>User name : <span className='text-blue-400'>sachinsilva</span></h1>
            <h1>First name : <span>sachin</span></h1>
            <h1>Last name : <span>Silva</span></h1>
            <p>Access : <span className='text-green-500'>Available</span></p>
            <p>Type : <span className='font-bold'>Job Seeker</span></p>
          </div>
          <div className='text-white flex gap-4 my-4'>
            <button className='bg-slate-500 px-4 py-2'>UnBlock</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;