//CSS
import './styles/global.css'

//Components
import PersonalCard from './components/PersonalCard';
import CardCreate from './components/CardCreate';
import Text from './components/Text';
import Button from './components/Button';
import ButtonClose from './components/ButtonClose';

//Hooks
import { useState } from 'react';

export default function App() {
  
  const pages = [
    {
      'id': 0,
      'name': 'personalCard'
    },
    {
      'id': 1,
      'name': 'cardCreate'
    },
  ]
  
  const [page, setPage] = useState(pages[0].name)

  const handlePage = () => {
    if(page === 'personalCard'){
      setPage(pages[1].name)
    } else {
      setPage(pages[0].name)
    }
  }
  
  return (
    <div className='bg-stone-900 py-10'>
      {page === 'personalCard' && <PersonalCard />}
      {page === 'personalCard' && 
      <div className='text-center py-8'>
        <Button onClick={handlePage} >
          <Text className='font-semibold text-md'>Criar seu cartão</Text>
        </Button>
      </div>}
      {page === 'cardCreate' && 
      <main className='mx-6 px-3 py-4 rounded bg-stone-800 border-2 border-cyan-500'>
        <div className='flex justify-end mx-4 mb-4 cursor-pointer'>
          <ButtonClose onClick={handlePage} />
        </div>
        <CardCreate />
      </main>}
    </div>
  )
}