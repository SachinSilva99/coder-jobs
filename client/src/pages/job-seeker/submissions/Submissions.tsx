import SubmissionCard from "../../../components/cards/SubmissionCard.tsx";

const Submissions = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 min-h-[80vh]'>
      <div className='flex flex-col flex-wrap gap-4  my-4 2xl:justify-between'>
        <SubmissionCard/>
        <SubmissionCard/>
        <SubmissionCard/>
      </div>
    </div>
  );
};

export default Submissions;