import Text from "./Text";
import ButtonCardCreate from './ButtonCardCreate';
import Input from './Input';
import PhotoIcon from './icons/PhotoIcon';
import SkillSelect from "./SkillSelect";
import { useState } from "react";

export default function CardCreate () {
  
  const personalCardData = [{

  }]


  //Data Header
  const [personalPhoto, setPersonalPhoto] = useState()


  return (
    <section className='mx-6 px-3 py-4 rounded bg-stone-800 border-2 border-cyan-500'>
        <header className='text-center mb-12'>
          <Text className='text-lg font-semibold'>Preencha os dados e crie o seu próprio cartão!</Text>
        </header>
          <form className='text-center'>
            <label className='flex flex-col gap-4 py-6 my-6 items-center cursor-pointer bg-stone-900' htmlFor="photo" >
              <Text>Quer carregar uma foto?</Text>
              <i><PhotoIcon/></i>
              <input type='file' name='photo' id='photo'/>
            </label>

            <label htmlFor="name">
              <Text>Nome</Text>
            </label>
            <Input type='text' name='name' id='name' placeholder='Qual é o seu nome?'>
            </Input>

            <label htmlFor="occupation">
              <Text>Profissão</Text>
            </label>
            <Input type='text' name='occupation' id='occupation' placeholder='O que você faz?'></Input>

            <label htmlFor="about">
              <Text>Sobre</Text>
            </label>
            <textarea className='bg-stone-900 pl-4 py-4 my-3 w-full rounded' rows={3} cols={42} placeholder='Fale um pouco sobre você'></textarea>
            <label htmlFor="skills" >
              <Text>Selecione até 4 habilidades</Text>
            </label>
              <SkillSelect />
            <div className='mt-12'>
              <ButtonCardCreate>
              <Text className='font-semibold text-md'>Gerar cartão</Text>
              </ButtonCardCreate>
            </div>
          </form>
      </section>
  )
}