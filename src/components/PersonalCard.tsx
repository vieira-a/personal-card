//Components
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Separator from './Separator';

export default function PersonalCard() {
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