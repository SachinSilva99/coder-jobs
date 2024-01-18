import {IoLocationSharp} from "react-icons/io5";
import {FaMoneyBill, FaSuitcase} from "react-icons/fa";
import {SiHashnode} from "react-icons/si";
import {useEffect, useState} from "react";
import {getCompany} from "../../service/company/CompanyService.ts";

interface CompanyDetail {
  companyLogo: string;
  companyName: string
}

interface Props {
  _id?: string,
  jobTitle: string,
  company: string,
  description: string,
  category: string,
  subCategory: string,
  jobType: string,
  modality: string,
  salary?: number,
  endingDate: string,
  startingDate: string,
  createdAt: string,
}

const JobCard = ({
                   company,
                   jobTitle,
                   jobType,
                   salary,
                   endingDate,
                   startingDate,
                   modality,
                   subCategory,
                   category,
                   description,
                   createdAt,
                   _id
                 }: Props) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [companyDetail, setCompanyDetail] = useState<CompanyDetail | null>(null);
  useEffect(() => {
    const loadCompanyDetails = async () => {
      const companyFound = await getCompany(company);
      console.log(companyFound)
      if (companyFound) {
        setCompanyDetail(companyFound);
      }
    }
    loadCompanyDetails();
  }, []);
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  const isLongDescription = description.split(' ').length > 20;

  return (
    <div
      className='border border-slate-300 rounded-lg hover:bg-blue-100 hover:duration-500 cursor-pointer'>
      <div className='p-4 flex lg:flex-row gap-2 flex-col  rounded-md'>
        <div>
          <div className='flex justify-between  items-center'>
            <h1 className='xl font-semibold'>
              {jobTitle}
            </h1>
            <img className='w-20'
                 src={companyDetail?.companyLogo}
                 alt=""/>
          </div>
          <h2 className={'py-2'}>{companyDetail?.companyName}</h2>
          <div className='flex-col gap-4 justify-center items-center'>
            <div className='flex gap-2'>
              <IoLocationSharp/>
              <p className='text-cyan-500'>Colombo, Sri Lanka</p>
            </div>
          </div>
          <p>{category}
            {'>'} {subCategory}
          </p>

        </div>
        {/*button and icons*/}
        <div className='flex flex-col md:flex-row  md:justify-between flex-1 md:items-center py-3 px-2 gap-4'>
          <div
            className='flex flex-wrap flex-row md:flex-col lg:justify-center lg:items-center flex-1 md:gap-4 text-xs md:text-sm gap-4 '>
            <div className='flex gap-4 flex-col'>
              <div className='flex gap-3 items-center '>
                <FaSuitcase/>
                <p className='inline'>{jobType}</p>
              </div>
              <div className='flex gap-3 items-center '>
                <SiHashnode/>
                <p>{modality}</p>
              </div>
              {salary && <div className='flex gap-3 items-center'>
                <FaMoneyBill/>
                <p><span>Rs : </span>{salary}</p>
              </div>}
            </div>

          </div>
          <button className='w-28 md:w-48 md:px-6 md:py-3 text-sm bg-emerald-600 text-white px-2 py-2 rounded-lg '>
            Apply
          </button>
        </div>
      </div>
      <p className='p-4 no-more-tailwind'>
        <h2 className='font-semibold text-xl'>Description</h2>
        <div dangerouslySetInnerHTML={{__html: showFullDescription ? description : `${description.slice(0, 200)}...`}}/>
        {isLongDescription && (
          <button className='text-emerald-600' onClick={toggleDescription}>
            {showFullDescription ? 'Read Less' : 'Read More'}
          </button>
        )}
      </p>
      <p className='text-right text-sm md:text-md  pr-8 pb-2 text-slate-400'>{createdAt}</p>
    </div>
  );
};


export default JobCard;
