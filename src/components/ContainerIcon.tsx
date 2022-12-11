import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { ImgHTMLAttributes, ReactHTMLElement } from "react";

export interface ContainerIconProps {
  children?: ReactJSXElement;
}

export default function ContainerIcon ({children}: ContainerIconProps) {
  return (
    <div className="w-12 h-12 rounded bg-stone-900 flex items-center justify-center cursor-pointer hover:border border-cyan-500">
      {children}
    </div>
  )
}