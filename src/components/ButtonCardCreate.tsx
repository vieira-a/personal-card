import { ReactNode } from 'react';
interface ButtonProps {
  children?: ReactNode;
  onClick?:()=>void;
}

export default function ButtonCardCreate ({children, onClick}: ButtonProps) { 
  return (
    <button className="w-52 h-13 px-10 py-4 rounded bg-cyan-500 hover:opacity-90 border-cyan-300" onClick={onClick}>
      {children}
    </button>
  )
}