import {ReactNode} from "react";


interface Props {
  name: string,
  label: string,
  type: string,
  placeholder?: string,
  optional?: boolean,
  icon?: ReactNode;
  disabled?:boolean;
  value?:string;
}


function Input(props: Props) {
  return (
    <div className='flex flex-col'>
      <label className="mt-8 mb-2" htmlFor={props.name}>
        {props.label} {!props.optional && <span className={'text-red-600'}>{' '}*</span>}
      </label>
      <div className="relative">
        {props.icon && <div className="absolute top-0 left-0 mt-4 ml-2">{props.icon}</div>}
        <input
          className="pl-10 py-2 border-b-2 outline-none mt-1 focus:border-blue-300 w-full"
          type={props.type}
          name={props.name}
          id={props.name}
          value={props.value}
          placeholder={props.placeholder}
          disabled={props.disabled}
        />
      </div>
    </div>
  );
}

export default Input;