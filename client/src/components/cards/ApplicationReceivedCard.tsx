import {IoLocationSharp} from "react-icons/io5";

interface Props {
  _id: string,
  jobTitle: string,
  category: string,
  subCategory: string,
  userPic: string
  onClick: () => void,
}

const ApplicationReceivedCard = ({
                                   _id,
                                   category,
                                   subCategory,
                                   jobTitle,
                                   userPic,
                                   onClick
                                 }: Props) => {
  return (
    <div onClick={(e) => onClick()}
         className='border border-slate-300 rounded-lg hover:bg-blue-100 hover:duration-500 cursor-pointer'>
      <div className='flex flex-row items-center  p-4 gap-4'>
        {/*img */}
        <div className='m-4 w-20'>
          <img
            src={userPic}
            alt="img"/>
        </div>
        {/*detail*/}
        <div className='flex justify-between w-full'>
          <div>
            <h1 className='font-semibold'>{jobTitle}</h1>
            <h2>{category} {">"} {subCategory}</h2>
            <div className='flex gap-2'>
              <IoLocationSharp/>
              <p className='text-cyan-500'>Colombo, Sri Lanka</p>
            </div>
          </div>
          <div className='flex items-center justify-center px-6 py-4'>
            <div className='flex gap-2'>
              <button className='bg-blue-400 px-6 py-3 text-white rounded-md'>View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationReceivedCard;
