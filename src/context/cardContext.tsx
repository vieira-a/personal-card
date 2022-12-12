import { createContext, useState } from "react";

export const CardContext = createContext({})

export interface CardContextProps {
  children?: React.ReactNode;
}

export const CardContextProvider = ({children}: CardContextProps) => {
  
  const skillsData = ["javascript", "typeScript", "react", "sass"];

  const cardData = {
    photoSrc: "https://avatars.githubusercontent.com/u/65618765?v=4",
    name: "Anderson Vieira",
    occupation: "Desenvolvedor Frontend",
    about: "Apaixonado por tecnologia, sou Desenvolvedor Frontend com background em Gerenciamento de Serviços e Infraestrutura de TI.",
    skills: skillsData,
    linkedin: "https://www.linkedin.com/in/vieira-a/",
    github: "https://github.com/vieira-a"
  };
    
  const [personalCard, setPersonalCard] = useState(cardData);
  const [cardSkills, setCardSkills] = useState(skillsData);
  
  return(
    <CardContext.Provider value={{cardData, personalCard, setPersonalCard, skillsData, cardSkills, setCardSkills }}>
      {children}
    </CardContext.Provider>
  )
}

