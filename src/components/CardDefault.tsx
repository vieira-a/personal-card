import Text from "./Text";
import Photo from './Photo';
import About from './About';
import Separator from './Separator';
import Skills from './Skills';
import Contact from './Contact';
import ButtonCardCreate from './ButtonCardCreate';

export default function CardDefault() {
  const myName = "Anderson Vieira";
  const myProf = "Desenvolvedor Frontend"
  const photoSrc = 'https://avatars.githubusercontent.com/u/65618765?v=4';

  return (
    <main>
      <header className='flex flex-col items-center pb-8'>
        <Photo src={photoSrc}></Photo>
        <Text className='text-stone-200 text-xl font-semibold mt-6'>{myName}</Text>
        <Text className='text-cyan-500 text-lg font-semibold'>{myProf}</Text>
      </header>
      <div className='mx-6 mb-6 rounded bg-stone-800'>
        <About/>
        <Separator/>
        <Skills/>
        <Separator/>
        <Contact/>
        <Separator/>
      </div>
    </main>
  )
}