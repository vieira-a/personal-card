import './styles/global.css'
import Text from "./components/Text";
import Photo from './components/Photo';

export default function App() {
  const myName = "Anderson Vieira";
  const myProf = "Desenvolvedor Frontend"
  const photoSrc = 'https://avatars.githubusercontent.com/u/65618765?v=4';

  return (
    <div className='w-screen h-screen bg-stone-800'>
      <header className='flex flex-col items-center pt-10'>
        <Photo src={photoSrc}></Photo>
        <Text className='text-stone-200 text-xl font-semibold mt-6'>
          {myName}
        </Text>
        <Text className='text-cyan-500 text-lg font-semibold'>
          {myProf}
        </Text>
      </header>
    </div>
  )
}