import OpportunityCard from "../../../components/cards/OpportunityCard.tsx";

const Opportunities = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 min-h-[90vh]'>
      <h1 className='text-2xl my-8'>Opportunities</h1>
      <div className='flex flex-col flex-wrap gap-4 my-4 md:my-8'>
        <OpportunityCard/>
        <OpportunityCard/>
        <OpportunityCard/>
      </div>
    </div>
  );
};

export default Opportunities;