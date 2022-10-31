export interface ButtonProps {
  children?: React.ReactNode;
}

export default function ButtonCardCreate ( {children}: ButtonProps) {
  return (
    <button className="w-52 h-13 px-10 py-4 rounded bg-cyan-500 hover:opacity-90 border-cyan-300">
      {children}
    </button>
  )
}