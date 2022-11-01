import './styles/global.css'
import Text from "./components/Text";
import Photo from './components/Photo';
import About from './components/About';
import Separator from './components/Separator';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ButtonCardCreate from './components/ButtonCardCreate';
import Input from './components/Input';
import PhotoIcon from './components/icons/PhotoIcon';

export default function App() {
  const myName = "Anderson Vieira";
  const myProf = "Desenvolvedor Frontend"
  const photoSrc = 'https://avatars.githubusercontent.com/u/65618765?v=4';

  return (
    <div className='bg-stone-900 py-10'>
      <header className='flex flex-col items-center pb-8'>
        <Photo src={photoSrc}></Photo>
        <Text className='text-stone-200 text-xl font-semibold mt-6'>{myName}</Text>
        <Text className='text-cyan-500 text-lg font-semibold'>{myProf}</Text>
      </header>
      <main className='mx-6 mb-6 rounded bg-stone-800'>
        <About/>
        <Separator/>
        <Skills/>
        <Separator/>
        <Contact/>
        <Separator/>
        <div className='text-center py-8'>
          <ButtonCardCreate>
            <Text className='font-semibold text-md'>Criar seu cartão</Text>
          </ButtonCardCreate>
        </div>
      </main>
      <section className='mx-6 px-3 py-8 rounded bg-stone-800 border-2 border-cyan-500'>
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
            <textarea className='bg-stone-900 pl-4 py-4 my-3 w-full' rows={3} cols={42} placeholder='Fale um pouco sobre você'></textarea>
            
            <label htmlFor="skills">
              <Text>Suas habilidades</Text>
            </label>
            <Input type='text' name='skills' id='skills' placeholder='Selecione até 4 habilidades'></Input>
            <div className='mt-12'>
              <ButtonCardCreate>
              <Text className='font-semibold text-md'>Gerar cartão</Text>
              </ButtonCardCreate>
            </div>
          </form>
      </section>
    </div>
  )
}