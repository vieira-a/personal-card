export interface InputProps {
  type?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  children?: React.ReactNode;
}

export default function Input ( {type, name, id, placeholder, children}: InputProps) {
  return (
    <>
    <input className='bg-stone-900 text-stone-200 pl-4 py-4 w-full my-3 rounded hover:border-cyan-500' 
    type={type} 
    name={name} 
    id={id} 
    placeholder={placeholder}/>
    {children}
    </>
  ) 
}