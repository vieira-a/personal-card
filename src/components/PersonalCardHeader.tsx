import Photo from "./Photo"
import Text from "./Text"

const photoSrc = 'https://avatars.githubusercontent.com/u/65618765?v=4';

export default function PersonalCardHeader() {
  
  return (
    <header className='flex flex-col items-center pb-8'>
        <Photo src={photoSrc}></Photo>
        <Text className='text-stone-200 text-xl font-semibold mt-6'>Nome</Text>
        <Text className='text-cyan-500 text-lg font-semibold'>Profissão</Text>
      </header>
  )
}