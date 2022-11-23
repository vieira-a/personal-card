import About from './About';
import Separator from './Separator';
import Skills from './Skills';
import Contact from './Contact';
import Header from './Header';

export default function CardDefault() {
  return (
    <main>
      <Header/>
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