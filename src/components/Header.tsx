import Text from "./Text";
import Photo from './Photo';
import { useContext } from "react";
import { CardContext } from "../context/cardContext";

export default function Header() {

  //Only shows, dont edit
  const personalCard: any = {} = useContext(CardContext);

  return (
    <header className='flex flex-col items-center pb-8'>
        <Photo src={personalCard.photoSrc}></Photo>
        <Text className='text-stone-200 text-xl font-semibold mt-6'>{personalCard.name}</Text>
        <Text className='text-cyan-500 text-lg font-semibold'>{personalCard.occupation}</Text>
      </header>
  )
}
