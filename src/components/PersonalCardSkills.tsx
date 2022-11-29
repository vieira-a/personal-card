import ContainerIcon from "./ContainerIcon";
import ReactIcon from "./icons/ReactIcon";
import JsIcon from "./icons/JsIcon";
import TsIcon from "./icons/TsIcon";
import SassIcon from "./icons/SassIcon";
import Text from "./Text";

export default function PersonalCardSkills () {
  return (
    <div className="text-center py-6">
      <Text className="text-cyan-500 text-md font-semibold">Habilidades</Text>
      <div className="flex items-center justify-center gap-3 mx-auto py-6">
        <ContainerIcon icon={<ReactIcon/>}></ContainerIcon>
        <ContainerIcon icon={<JsIcon/>}></ContainerIcon>
        <ContainerIcon icon={<TsIcon/>}></ContainerIcon>
        <ContainerIcon icon={<SassIcon/>}></ContainerIcon>
      </div>
    </div>
  )
}