import Text from "./Text";
import ContainerIcon from "./ContainerIcon";
import GhIcon from "./icons/GhIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import { useContext } from "react";
import { CardContext } from "../context/cardContext";

export default function Contact () {

  const {personalCard}: any = {} = useContext(CardContext)

  return (
    <div className="text-center py-6">
      <Text className="text-cyan-500 text-md font-semibold">Contato</Text>
      <div className="flex items-center justify-center gap-3 mx-auto py-6">
        <ContainerIcon>
          <a href="https://www.linkedin.com" target="blank">
            <img src={`${personalCard.social[0]}.svg`} alt={personalCard.social[0]} />
          </a>
        </ContainerIcon>
        <ContainerIcon>
          <a href="https://www.github.com" target="blank">
            <img src={`${personalCard.social[1]}.svg`} alt={personalCard.social[1]} />
          </a>
        </ContainerIcon>
      </div>
    </div>
  )
}