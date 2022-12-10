import Text from "./Text";
import { useContext } from "react";
import { CardContext } from "../context/cardContext";

export default function About () {
  
  const {personalCard}: any = {} = useContext(CardContext)

  const aboutText = "Apaixonado por tecnologia, sou Desenvolvedor Frontend com background em Gerenciamento de Serviços e Infraestrutura de TI."
  
  return (
    <div className="flex flex-col items-center py-6">
      <Text className='text-cyan-500 font-semibold text-md mb-6'>Sobre</Text>
      <Text className='text-stone-200 text-sm text-center mx-6'>{personalCard.about}</Text>
    </div>
    
  )
}