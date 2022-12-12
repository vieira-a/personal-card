import Text from "./Text";
import ContainerIcon from "./ContainerIcon";
import { useContext } from "react";
import { CardContext } from "../context/cardContext";

export default function Contact () {

  const { personalCard, setPersonalCard }: any = {} = useContext(CardContext)
  
  return (
    <div className="text-center py-6">
      <Text className="text-cyan-500 text-md font-semibold">Contato</Text>
      <div className="flex items-center justify-center gap-3 mx-auto py-6">
        <ContainerIcon>
          <a href={`${personalCard.linkedin}`}>
            <img src={`linkedin.svg`} alt={personalCard.linkedin} />
          </a>
        </ContainerIcon>
        <ContainerIcon>
          <a href={`${personalCard.github}`}>
            <img src={`github.svg`} alt={personalCard.github} />
          </a>
        </ContainerIcon>
      </div>
    </div>
  )
}