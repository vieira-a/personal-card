import CardDefault from './components/CardDefault';
import CardCreate from './components/CardCreate';

import './styles/global.css'

export default function App() {
  return (
    <div className='bg-stone-900 py-10'>
      <CardDefault/>
      <CardCreate/>
    </div>
    
  )
}