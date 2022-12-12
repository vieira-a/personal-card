//Components
import Text from "./Text";
import Button from "./Button";
import Input from './Input';
import SkillSelect from "./SkillSelect";

//Context imports
import { useContext } from "react";
import { CardContext } from "../context/cardContext";
interface CardCreateProps {
  handlePage?: ()=>void;
}

export default function CardCreate ({handlePage}: CardCreateProps) {

  const {setPersonalCard}: any = {} = useContext(CardContext);

  const handleChange = (event: any) => {
    setPersonalCard((prev: any) => {
      return {
        ...prev, [event.target.name]: event.target.value
      }
    })
  }
  
  return (  
    <>
      <header className='text-center mb-12'>
        <Text className='text-lg font-semibold'>Preencha os dados e crie o seu próprio cartão!</Text>
      </header>
      <form action="submit" className='text-center'>
        <label htmlFor="photoSrc">
          <Text>Link para foto</Text>
        </label>
        <Input onChange={handleChange} type='text' name='photoSrc' id='photoSrc' placeholder='Cole aqui um link para a sua foto'></Input>
        <label htmlFor="name">
          <Text>Nome</Text>
        </label>
        <Input onChange={handleChange} type='text' name='name' id='name' placeholder='Qual é o seu nome?'>
        </Input>
        <label htmlFor="occupation">
          <Text>Profissão</Text>
        </label>
        <Input onChange={handleChange} type='text' name='occupation' id='occupation' placeholder='O que você faz?'></Input>
        <label htmlFor="about">
          <Text>Sobre</Text>
        </label>
        <textarea onChange={handleChange} name="about" className='bg-stone-900 pl-4 py-4 my-3 w-full rounded' rows={3} cols={42} placeholder='Fale um pouco sobre você'></textarea>
        <label htmlFor="skills" >
          <Text>Selecione até 4 habilidades</Text>
        </label>
          <SkillSelect />
        <div className="social-networks my-3">
          <label htmlFor="linkedin">
          <Text>LinkedIn</Text>
          </label>
          <Input onChange={handleChange} type='text' name='linkedin' id='linkedin' placeholder='Cole aqui o link para o seu LinkedIn'>
          </Input>  
          <label htmlFor="github">
          <Text>GitHub</Text>
          </label>
          <Input onChange={handleChange} type='text' name='github' id='github' placeholder='Cole aqui o link para o seu LinkedIn'>
          </Input>  
        </div>
      </form>
    </>
  )
}