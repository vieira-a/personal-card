import Text from "./Text";

export default function PersonalCardAbout () {
  
  const sectionTitle = 'Sobre'
  const aboutText = "Texto do usuário"
  
  return (
    <div className="flex flex-col items-center py-6">
      <Text className='text-cyan-500 font-semibold text-md mb-6'>{sectionTitle}</Text>
      <Text className='text-stone-200 text-sm text-center mx-6'>{aboutText}</Text>
    </div>
    
  )
}