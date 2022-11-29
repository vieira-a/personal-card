import PersonalCardHeader from "./PersonalCardHeader"
import PersonalCardAbout from "./PersonalCardAbout"
import PersonalCardSkills from "./PersonalCardSkills";
import PersonalCardContact from "./PersonalCardContact";
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
        <PersonalCardContact/>
        <Separator/>
      </div>
    </main>
  )
}