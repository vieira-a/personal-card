import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      backgroundColor: '#1C1917',
      color: '#E7E5E4',
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: '80%',
    },
  },
};

const names = [
  'React',
  'Javascript',
  'Typescript',
  'Sass',
  'Java',
  'Python'
];

export default function SkillSelect() {

  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  
  return (
    <div>
      <FormControl 
      sx={{ 
        width: '100%',
        paddingTop: '12px',
      }}>
        <Select
          sx={{backgroundColor:'#1C1917', color: '#E7E5E4'}}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} 
              sx={{ color:'#E7E5E4'}}
              />
              <ListItemText primary={name}
               />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}