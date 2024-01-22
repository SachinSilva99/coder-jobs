import {useEffect, useState} from "react";
import {getAllRequests} from "../../../service/request/RequestService.ts";
import requests from "../../job-seeker/opportunities/Requests.tsx";
import {request} from "axios";
import RequestCard from "./RequestCard.tsx";

type Request = {
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
    user: string;
    createdAt: string;
    updatedAt: string;
  };
  jobTitle: string;
  description: string;
  status: string;
  view: boolean;
  createdAt: string;
  updatedAt: string;
};


function RequestsByCompanies() {
  const [requests, setRequest] = useState<Request[]>([]);
  useEffect(() => {
    getAllRequests(1, 10).then(requests => setRequest(requests))
  }, []);
  return (
    <div className="px-4 md:px-8 lg:px-16 min-h-[90vh]">
      <h1 className='text-xl my-8 font-bold'>Requests By this Company</h1>
      <div className='flex gap-4 flex-col my-4'>
        {requests.map(request => (
          <RequestCard _id={request._id} jobTitle={request.jobTitle} category={request.jobSeeker.category}
                       subCategory={request.jobSeeker.subCategory}
                       jobSeekerName={request.jobSeeker.jobSeekerContact} onClick={() => {}}
          />))}
      </div>

    </div>
  );
}

export default RequestsByCompanies;
