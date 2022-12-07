import Text from "./Text";
import ButtonCardCreate from './ButtonCardCreate';
import Input from './Input';
import PhotoIcon from './icons/PhotoIcon';
import SkillSelect from "./SkillSelect";
interface CardCreateProps {
  handlePage?: ()=>void;
}


export default function CardCreate ({handlePage}: CardCreateProps) {
  
  const personalCardData = {
    photoSrc: '',
    name: '',
    occupation: '',
    about: '',
    skills: {},
    linkedinSrc: '',
    gitHubSrc: '',
  }

  
  return (  
    <section className='mx-6 px-3 py-4 rounded bg-stone-800 border-2 border-cyan-500'>
        <header className='text-center mb-12'>
          <Text className='text-lg font-semibold'>Preencha os dados e crie o seu próprio cartão!</Text>
        </header>
          <form className='text-center'>
            <label htmlFor="personal-photo">
              <Text>Link para foto</Text>
            </label>
            <Input type='text' name='personal-photo' id='personal-photo' placeholder='Cole aqui um link para a sua foto'></Input>
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
            <div className="social-networks my-3">
              <label htmlFor="social-linkedin">
              <Text>LinkedIn</Text>
              </label>
              <Input type='text' name='social-linkedin' id='social-linkedin' placeholder='Cole aqui o link para o seu LinkedIn'>
              </Input>  
              <label htmlFor="social-github">
              <Text>GitHub</Text>
              </label>
              <Input type='text' name='social-github' id='social-github' placeholder='Cole aqui o link para o seu LinkedIn'>
              </Input>  
            </div>
            <div className='mt-12'>
              <ButtonCardCreate onClick={handlePage}>
              <Text className='font-semibold text-md'>Gerar cartão</Text>
              </ButtonCardCreate>
            </div>
          </form>
      </section>
  )
}