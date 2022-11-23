import Text from "./Text";
import Photo from './Photo';

export default function Header() {

  const myName = "Anderson Vieira";
  const myProf = "Desenvolvedor Frontend"
  const photoSrc = 'https://avatars.githubusercontent.com/u/65618765?v=4';

  return (
    <header className='flex flex-col items-center pb-8'>
        <Photo src={photoSrc}></Photo>
        <Text className='text-stone-200 text-xl font-semibold mt-6'>{myName}</Text>
        <Text className='text-cyan-500 text-lg font-semibold'>{myProf}</Text>
      </header>
  )
}
