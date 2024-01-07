import RequestCard from "../../../components/cards/RequestCard.tsx";

const Requests = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 min-h-[90vh]'>
      <h1 className='text-2xl my-8'>Opportunities</h1>
      <div className='flex flex-col flex-wrap gap-4 my-4 md:my-8'>
        <RequestCard/>
        <RequestCard/>
        <RequestCard/>
      </div>
    </div>
  );
};

export default Requests;
