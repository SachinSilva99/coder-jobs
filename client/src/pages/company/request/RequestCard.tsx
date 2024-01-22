
interface Props {
  _id: string,
  jobTitle: string,
  category: string,
  subCategory: string,
  jobSeekerName: string
  onClick: () => void,
}

function VacancyCard({category, jobTitle, subCategory, onClick, jobSeekerName}: Props) {
  return (
    <div onClick={() => onClick()}
         className='flex border-2 border-blue-200 justify-between items-center w-full gap-2 px-4 py-2 hover:bg-blue-200 rounded-md cursor-pointer'>
      <div>
        <h1 className='text-xl'><span className='text-slate-600'>Job Seeker Name</span> : <span
          className='font-semibold'>{jobSeekerName}</span>
        </h1>
        <h2 className=''><span className='text-slate-600'>Job Title</span> : <span
          className='font-semibold'>{jobTitle}</span>
        </h2>
        <div>
          <h2><span>{category}</span> {">"} <span>{subCategory}</span></h2>
        </div>
      </div>
    </div>
  );
}

export default VacancyCard;
