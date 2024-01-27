import {IoIosCloudDone} from "react-icons/io";
import {GrCheckboxSelected} from "react-icons/gr";
import {FaMoneyBill} from "react-icons/fa";

interface Props {
  _id: string,
  name: string,
  description: string,
  price: number,
  paymentMethod: string,
  onSelectPackage: () => void;
  selected: boolean
}

const CompanyPackageCard = ({name, paymentMethod, price, description, onSelectPackage, selected}: Props) => {
  return (
    <div
      className={`flex flex-row justify-between items-center gap-4 bg-blue-100 cursor-pointer p-8 ${selected ? 'border-2 border-blue-500' : ''} rounded-md`}
      onClick={onSelectPackage}>
      <div className='flex flex-col gap-2'>
        <h1 className={'text-xl'}><span>{name}</span></h1>
        <p>{description}</p>
        <p className={'flex flex-row items-center gap-4'}>
          <div className='text-green-600 '><FaMoneyBill/></div>
          USD {price}</p>
        <p> {paymentMethod}</p>
      </div>
      {selected && <div className='text-green-500 text-4xl'><GrCheckboxSelected/></div>}
    </div>
  );
};

export default CompanyPackageCard;
