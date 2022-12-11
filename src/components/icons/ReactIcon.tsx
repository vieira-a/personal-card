import { useContext } from "react";
import { CardContext } from "../../context/cardContext";

export default function ReactIcon () {

  const {personalCard}: any = {} = useContext(CardContext)

  const skill = personalCard.skills.filter((item: string ) => {
    return (item === "react")
  })

  return (
    <img src={`${skill}.svg`} alt="React JS" />
  )
}