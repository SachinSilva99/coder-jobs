import {useLocation} from "react-router-dom";

const JobRequestDetail = () => {
  const location = useLocation();
  const {  jobSeeker, jobTitle, description, status, view, createdAt, updatedAt } = location.state.request;

  return (
    <div className='px-4 md:px-8 lg:px-16 min-h-[90vh]'>
      <div className='bg-white p-8 rounded shadow-md'>
        <h1 className='text-3xl font-bold text-indigo-700 mb-6'>{jobTitle}</h1>
        <div className='mb-8'>
          <h2 className='text-xl font-semibold mb-3'>Job Details</h2>
          <p className='text-gray-700'>{description}</p>
          <div className='mt-4 flex flex-wrap'>
            <div className='w-full md:w-1/2'>
              <p className='text-gray-600'>Category: {jobSeeker.category}</p>
              <p className='text-gray-600'>Sub-Category: {jobSeeker.subCategory}</p>
            </div>
          </div>
        </div>
        <div className='mb-8'>
          <h2 className='text-xl font-semibold mb-3'>Applicant Information</h2>
          <p className='text-gray-600'>Name: {jobSeeker.user.fName}</p>
          <p className='text-gray-600'>Email: {jobSeeker.user.email}</p>
          <p className='text-gray-600'>Contact: {jobSeeker.jobSeekerContact}</p>
        </div>

        <div className='mb-8'>
          <h2 className='text-xl font-semibold mb-3'>Application Status</h2>
          <p className={`text-${status === 'Approved' ? 'green' : 'red'}-500`}>Status: {status}</p>
          <p className='text-gray-600'>Viewed: {view ? 'Yes' : 'No'}</p>
        </div>

        <div className='mb-8'>
          <h2 className='text-xl font-semibold mb-3'>Timeline</h2>
          <p className='text-gray-600'>Created at: {createdAt}</p>
          <p className='text-gray-600'>Updated at: {updatedAt}</p>
        </div>
      </div>
    </div>
  );
};

export default JobRequestDetail;
