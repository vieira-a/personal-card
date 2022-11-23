import { SVGProps } from "react"

const ButtonClose = (props: SVGProps<SVGSVGElement>, onClick?: () =>void) => (
  <svg onClick={onClick}
  width={32}
  height={32}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <path
    d="M25 7 7 25M25 25 7 7"
    stroke="#06B6D4"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
)


export default ButtonClose

