export interface ContainerIconProps {
  icon?: React.ReactNode;
  children?: string;
}

export default function ContainerIcon ({icon}: ContainerIconProps) {
  return (
    <div className="w-12 h-12 rounded bg-stone-900 flex items-center justify-center">
      {icon}
    </div>
  )
}