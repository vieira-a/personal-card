export interface PhotoProps {
  className?: string;
  src?: string;
}

export default function Photo ({className, src}: PhotoProps) {
  return (
    <img src={src} alt="avatar" className={className='rounded-full w-36 h-36 bg-gradient-to-b p-[4px] from-cyan-500 via-transparent to-cyan-300'}/>
  )
}