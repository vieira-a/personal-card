import Select from 'react-select';

export default function SkillSelect() {
  
  const customStyles = {
    control: () => ({
      background: '#1C1917',
      display: 'flex',
      padding: '12px',
    }),
    option: () => ({
      background: '#1C1917',
      color: '#E7E5E4',
      borderBottom: '1px solid gray',
      padding: '12px',
    }),
  };
  
  const skillsList = [
    { label: "React", value: "React" },
    { label: "Javascript", value: "Javascript" },
    { label: "Typescript", value: "Typescript" },
    { label: "Sass", value: "Sass" }
  ];

  return (
    <Select className='text-left mt-4' styles={customStyles} placeholder={'Selecione até 4 habilidades'} options={skillsList} isMulti />
  )

}