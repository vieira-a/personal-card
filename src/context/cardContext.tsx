import { createContext, useState } from "react";

export const CardContext = createContext({})

export interface CardContextProps {
  children?: React.ReactNode;
}

export const CardContextProvider = ({children}: CardContextProps) => {
  
  const cardData = {
    photoSrc: "https://avatars.githubusercontent.com/u/65618765?v=4",
    name: "Anderson Vieira",
    occupation: "Desenvolvedor Frontend",
    about: "Apaixonado por tecnologia, sou Desenvolvedor Frontend com background em Gerenciamento de Serviços e Infraestrutura de TI.",
    skills: [
      {
        "name": "JavaScript",
        "iconSrc": "javascript.svg"
      },
      {
        "name": "TypeScript",
        "iconSrc": "typescript.svg"
      },
      {
        "name": "React",
        "iconSrc": "react.svg"
      },
      {
        "name": "Sass",
        "iconSrc": "sass.svg"
      }
    ],
      
    social: [
      {
        "name": "LinkedIn",
        "iconSrc": "linkedin.svg"
      },
      {
        "name": "GitHub",
        "iconSrc": "github.svg"
      }
    ]
  };

  const [personalCard, setPersonalCard] = useState(cardData);

  return(
    <CardContext.Provider value={{cardData, personalCard, setPersonalCard}}>
      {children}
    </CardContext.Provider>
  )

}

