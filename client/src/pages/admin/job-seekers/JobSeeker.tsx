const JobSeeker = () => {
  return (
    <div className='px-4 pd:px-8 lg:px-16 min-h-[80vh]'>
      <h1>Job Seeker : <span>SachinSilva</span></h1>
      {/*details*/}
      <div className='flex flex-wrap gap-4'>
        <div className='my-4 mx-2'>
          <p>Id</p>
          <p className='font-semibold'>723jasciac</p>
        </div>
        <div className='my-4 mx-2'>
          <p>Username</p>
          <p className='font-semibold'>nimalsilva</p>
        </div>
      </div>
    </div>
  );
}

export default JobSeeker;