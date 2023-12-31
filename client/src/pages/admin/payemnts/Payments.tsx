
const Payments = () => {
  return (
    <div className='px-4 pd:px-8 lg:px-16 min-h-[90vh]'>
      <h1 className='text-2xl my-4'>Payments</h1>

      <div className='flex  items-center max-w-lg my-4'>
        <label htmlFor="paymentType">Payment Type</label>
        <select id="paymentType"
                className="block w-full py-2  text-sm focus:outline-none border-b-2 border-slate-300 hover:border-blue-400  mt-8 mb-2">
          <option selected>Payment Type</option>
          <option value="">Monthly</option>
          <option value="">Annually</option>
          <option value="">Per Vacancy</option>
        </select>
      </div>
    </div>
  );
};

export default Payments;