import {FaBuilding} from "react-icons/fa";
import {ReactNode} from "react";


interface Props {
  name: string,
  label: string,
  type: string,
  placeholder?: string,
  optional?: boolean,
  icon?: ReactNode;
}


function Input(props: Props) {
  return (
    <div className='flex flex-col'>
      <label className="mt-8 mb-2" htmlFor={props.name}>
        {props.label} {!props.optional && <span className={'text-red-600'}>{' '}*</span>}
      </label>
      <div className="relative">
        {props.icon && <div className="absolute top-0 left-0 mt-2 ml-2">{props.icon}</div>}
        <input
          className="pl-10 border-b-2 outline-none  mt-1 focus:border-blue-300 w-full"
          type={props.type}
          name={props.name}
          id={props.name}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}

export default Input;