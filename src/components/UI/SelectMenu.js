import React, { useContext } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';
import { uiContext } from '../../context/ContextProvider';

const SelectMenu = ({ list }) => {
   const [title, setTitle] = React.useState('March 2022');
   const { currentColor, darkMode } = useContext(uiContext);

   const handleChange = (event) => {
      setTitle(event.target.value);
   };

   return (
      <Box>
         <FormControl sx={{ m: 0, minWidth: 120 }} size='small'>
            <Select
               value={title}
               onChange={handleChange}
               displayEmpty
               inputProps={{ 'aria-label': 'Without label' }}
               sx={{
                  fontSize: '14px',
                  '.MuiOutlinedInput-notchedOutline': {
                     borderColor: darkMode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
                     borderWidth: '1px',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                     borderColor: darkMode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
                     borderWidth: '1px'
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                     borderColor: darkMode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
                     borderWidth: '1px'
                  },
               }}
               MenuProps={{
                  sx: {
                     "&& .Mui-selected": {
                        backgroundColor: `${currentColor}20`
                     },
                     "&& .Mui-selected:hover": {
                        backgroundColor: `${currentColor}20`
                     }
                  }
               }}
            >
               {list.map((item, index) => (
                  <MenuItem
                     sx={{
                        fontSize: '14px',
                        color: 'text.primary'
                     }}
                     key={index}
                     value={item}
                  >
                     {item}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </Box>
   );
}

export default SelectMenu;