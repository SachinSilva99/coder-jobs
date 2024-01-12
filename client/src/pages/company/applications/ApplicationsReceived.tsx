import ApplicationReceivedCard from "../../../components/cards/ApplicationReceivedCard.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/Store.ts";

const ApplicationsReceived = () => {
  const {currentUser} = useSelector((state: RootState) => state.user);
  console.log(currentUser);
  return (
    <div className='px-4 md:px-8 lg:px-16 min-h-[90vh]'>
      <div className='flex flex-col flex-wrap gap-4  my-4 2xl:justify-between'>
      <ApplicationReceivedCard/>
      <ApplicationReceivedCard/>
      </div>
    </div>
  );
};

export default ApplicationsReceived;
