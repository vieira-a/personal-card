import './styles/global.css'
import Text from "./components/Text";
import Photo from './components/Photo';
import About from './components/About';

export default function App() {
  const myName = "Anderson Vieira";
  const myProf = "Desenvolvedor Frontend"
  const photoSrc = 'https://avatars.githubusercontent.com/u/65618765?v=4';

  return (
    <div className='w-screen h-screen bg-stone-900'>
      <header className='flex flex-col items-center pt-10 pb-8 w-screen'>
        <Photo src={photoSrc}></Photo>
        <Text className='text-stone-200 text-xl font-semibold mt-6'>{myName}</Text>
        <Text className='text-cyan-500 text-lg font-semibold'>{myProf}</Text>
      </header>
      <main className='mx-6 mb-6 rounded bg-stone-800'>
        <About/>
      </main>
    </div>
  )
}