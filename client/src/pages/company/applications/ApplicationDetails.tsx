import {useLocation} from "react-router-dom";
import {JobApplication} from "./ApplicationsReceived.tsx";
import Input from "../../../components/input/Input.tsx";


const ApplicationDetails = () => {
  const location = useLocation();
  const applicationDetail: JobApplication = location.state.application;
  const {jobSeeker, vacancy, coverLetter} = applicationDetail;
  const {user, avatar, resume, jobSeekerContact} = jobSeeker;
  const {email, fName, lName} = user;

  return (
    <div className='px-4 md:px-8 lg:px-16 min-h-[90vh]'>
      <h1 className='text-blue-500 text-2xl my-2'>{vacancy.jobTitle}</h1>

      <div className='flex flex-col md:flex-row gap-4 my-2'>
        <Input disabled={true} value={fName} label={'First Name'} type={'text'} name={'firstName'}
               optional={true}></Input>
        <Input disabled={true} value={lName} label={'Last Name'} type={'text'} name={'firstName'}
               optional={true}></Input>
        <Input disabled={true} value={email} label={'Email'} type={'email'} name={'email'} optional={true}></Input>
        <Input disabled={true} value={jobSeekerContact} label={'contact'} type={'text'} name={'contact'}
               optional={true}></Input>

      </div>
      <div id={'avatar'} className='my-4'>
        <label className='' htmlFor='avatar'>Profile Picture</label>
        <img

          className='max-w-96 max-h-96'
          src={avatar}
          alt="img"/>
      </div>
      <div>
        {coverLetter}
      </div>
      <label htmlFor='resume'>Resume</label>
      <object id='resume' className={'max-w-full h-[600px] my-4'}
              data={resume}
              type="application/pdf" width="100%"
              height="100%">
      </object>
    </div>
  );
}

export default ApplicationDetails;
