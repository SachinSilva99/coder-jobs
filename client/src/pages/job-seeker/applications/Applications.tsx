import ApplicationCard from "../../../components/cards/ApplicationCard.tsx";

const Applications = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 min-h-[90vh]'>
      <div className='flex flex-col flex-wrap gap-4  my-4 2xl:justify-between'>
        <ApplicationCard/>
        <ApplicationCard/>
        <ApplicationCard/>
      </div>
    </div>
  );
};

export default Applications;
