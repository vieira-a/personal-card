import ContainerIcon from "./ContainerIcon";
import Text from "./Text";
import { useContext } from "react";
import { CardContext } from "../context/cardContext";

export default function Skills () {

  const {personalCard}: any = {} = useContext(CardContext)
  
  return (
    <div className="text-center py-6">
      <Text className="text-cyan-500 text-md font-semibold">Habilidades</Text>
      <div className="flex items-center justify-center gap-3 mx-auto py-6">
        <ContainerIcon>
          <img src={`${personalCard.skills[0]}.svg`} alt={personalCard.skills[0]} />
        </ContainerIcon>
        <ContainerIcon>
          <img src={`${personalCard.skills[1]}.svg`} alt={personalCard.skills[1]} />
        </ContainerIcon>
        <ContainerIcon>
          <img src={`${personalCard.skills[2]}.svg`} alt={personalCard.skills[2]} />
        </ContainerIcon>
        <ContainerIcon>
          <img src={`${personalCard.skills[3]}.svg`} alt={personalCard.skills[3]} />
        </ContainerIcon>
      </div>
    </div>
  )
}