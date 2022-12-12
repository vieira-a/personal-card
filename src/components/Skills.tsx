import ContainerIcon from "./ContainerIcon";
import Text from "./Text";
import { useContext } from "react";
import { CardContext } from "../context/cardContext";

export default function Skills () {

  const {personalCard}: any = {} = useContext(CardContext)
  const {cardSkills}: any = {} = useContext(CardContext)
  
  return (
    <div className="text-center py-6">
      <Text className="text-cyan-500 text-md font-semibold">Habilidades</Text>
      <div className="flex items-center justify-center gap-3 mx-auto py-6">
        <ContainerIcon>
          <img src={`${cardSkills[0]}.svg`} alt={cardSkills[0]} />
        </ContainerIcon>
        <ContainerIcon>
          <img src={`${cardSkills[1]}.svg`} alt={cardSkills[1]} />
        </ContainerIcon>
        <ContainerIcon>
          <img src={`${cardSkills[2]}.svg`} alt={cardSkills[2]} />
        </ContainerIcon>
        <ContainerIcon>
          <img src={`${cardSkills[3]}.svg`} alt={cardSkills[3]} />
        </ContainerIcon>
      </div>
    </div>
  )
}