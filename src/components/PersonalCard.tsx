import PersonalCardHeader from "./PersonalCardHeader"
import PersonalCardAbout from "./PersonalCardAbout"
import PersonalCardSkills from "./PersonalCardSkills";
import Separator from './Separator';

export default function PersonalCard() {
  return (
    <main>
      <PersonalCardHeader/>
      <div className='mx-6 mb-6 rounded bg-stone-800'>
        <PersonalCardAbout/>
        <Separator/>
        <PersonalCardSkills/>
        <Separator/>
      </div>
    </main>
  )
}