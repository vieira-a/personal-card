import CardDefault from './components/CardDefault';
import CardCreate from './components/CardCreate';
import ButtonCardCreate from './components/ButtonCardCreate';
import Text from './components/Text';
import { useState } from 'react';

import './styles/global.css'

export default function App() {
  
  const pages = [
    {
      'id': 0,
      'name': 'cardDefault'
    },
    {
      'id': 1,
      'name': 'cardCreate'
    }
  ]
  
  const [page, setPage] = useState(pages[0].name)
  
  const handlePage = () => {
    if(page === 'cardDefault'){
      setPage(pages[1].name)
    }
  }
  
  
  return (
    <div className='bg-stone-900 py-10'>
      {page === 'cardDefault' && <CardDefault />}
      {page === 'cardDefault' && <div className='text-center py-8'>
          <ButtonCardCreate onClick={handlePage}>
            <Text className='font-semibold text-md'>Criar seu cartão</Text>
          </ButtonCardCreate>
      </div>}
      {page === 'cardCreate' && <CardCreate />}
    </div>
  )
}