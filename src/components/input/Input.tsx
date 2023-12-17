

interface Props {
  name: string,
  label: string,
  type: string,
  placeholder?: string,
  optional?: boolean,
  icon: string
}


function Input(props:Props) {
  return (
    <>
      <label className="mt-8 mb-2" htmlFor={props.name}>
        {props.label} {!props.optional && <span className={'text-red-600'}>{' '}*</span>}
      </label>
      <div className="relative w-full">
        <img
          className="absolute m-1"
          src={props.icon}
          alt={props.name}
          loading="lazy"
        />
        <input
          className="pl-10 border-b-2 outline-none  mt-1 focus:border-blue-300 w-full"
          type={props.type}
          name={props.name}
          id={props.name}
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
}

export default Input;