import {MdDelete, MdEdit} from "react-icons/md";

interface Props {
  _id: string,
  jobTitle: string,
  category: string,
  subCategory: string,
  editOnClick: () => void,
  deleteOnClick: () => void,
}

function VacancyCard({_id, category, jobTitle, subCategory, editOnClick, deleteOnClick}: Props) {
  return (
    <div
      className='flex border-2 border-blue-200 justify-between items-center w-full gap-2 px-4 py-2 hover:bg-blue-200 rounded-md'>
      <div>
        <h1 className='text-xl'><span className='text-slate-600'>Job Title</span> : <span
          className='font-semibold'>{jobTitle}</span>
        </h1>
        <div>
          <h2><span>{category}</span> {">"} <span>{subCategory}</span></h2>
        </div>
      </div>
      <div className='flex gap-4'>
        <div className='text-green-500 cursor-pointer hover:text-slate-200 text-2xl' onClick={(e) => editOnClick()}>
          <MdEdit/>
        </div>
        <div className='text-red-500 cursor-pointer hover:text-slate-200 text-2xl' onClick={(e) => deleteOnClick()}>
          <MdDelete/>
        </div>
      </div>
    </div>
  );
}

export default VacancyCard;
