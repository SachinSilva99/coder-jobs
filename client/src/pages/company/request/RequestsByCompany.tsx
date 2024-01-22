import {useEffect, useState} from "react";
import {getAllRequests} from "../../../service/request/RequestService.ts";
import RequestCard from "./RequestCard.tsx";
import {useNavigate} from "react-router-dom";


type JobRequest = {
  _id: string;
  company: string;
  jobSeeker: {
    _id: string;
    category: string;
    subCategory: string;
    resume: string;
    avatar: string;
    gender: string;
    jobSeekerContact: string;
    user: {
      _id: string;
      fName: string;
      lName: string;
      email: string;
    };
  };
  jobTitle: string;
  description: string;
  status: string;
  view: boolean;
  deleteStatus: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

function RequestsByCompany() {
  const [requests, setRequest] = useState<JobRequest[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllRequests(1, 10).then(requests => setRequest(requests))
  }, []);
  return (
    <div className="px-4 md:px-8 lg:px-16 min-h-[90vh]">
      <h1 className='text-xl my-8 font-bold'>Requests Sent</h1>
      <div className='flex gap-4 flex-col my-4'>
        {requests.map(request => (
          <RequestCard _id={request._id} jobTitle={request.jobTitle} category={request.jobSeeker.category}
                       subCategory={request.jobSeeker.subCategory}
                       jobSeekerName={request.jobSeeker.jobSeekerContact} onClick={() => {
            navigate('/company/request-detail', {state: {request: request}})
          }}
          />))}
      </div>

    </div>
  );
}

export default RequestsByCompany;
