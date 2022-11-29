import PersonalCardHeader from "./PersonalCardHeader"
import PersonalCardAbout from "./PersonalCardAbout"
export default function PersonalCard() {
  return (
    <main>
      <PersonalCardHeader/>
      <div className='mx-6 mb-6 rounded bg-stone-800'>
        <PersonalCardAbout/>
      </div>
    </main>
  )
}