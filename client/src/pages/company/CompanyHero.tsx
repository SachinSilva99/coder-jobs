import JobSeekerCard from "../../components/cards/JobSeekerCard.tsx";

function CompanyHero() {
  return (
    <div className='px-4 md:px-8 lg:px-16'>
      CompanyHero
      <div className='my-4 flex flex-col gap-8'>
       <JobSeekerCard/>
      </div>

    </div>
  );
}

export default CompanyHero;