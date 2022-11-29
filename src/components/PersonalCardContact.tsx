import Text from "./Text";
import ContainerIcon from "./ContainerIcon";
import GhIcon from "./icons/GhIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function Contact () {
  return (
    <div className="text-center py-6">
      <Text className="text-cyan-500 text-md font-semibold">Contato</Text>
      <div className="flex items-center justify-center gap-3 mx-auto py-6">
        <ContainerIcon icon={<GhIcon/>}></ContainerIcon>
        <ContainerIcon icon={<LinkedinIcon/>}></ContainerIcon>
      </div>
    </div>
  )
}