export interface TextProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Text ({className, children}: TextProps) {
  return (  
    <span className={className}>
      {children}
    </span>
  )
}