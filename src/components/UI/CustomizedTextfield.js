import { TextField } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { uiContext } from '../../context/ContextProvider';

const CustomizedTextfield = ({ size, label, handleChange, color, width, defaultValue }) => {
   const { darkMode } = useContext(uiContext);

   return (
      <TextField
         size={size}
         label={label}
         defaultValue={defaultValue}
         variant="outlined"
         onChange={(e) => handleChange(e)}
         color='primary'
         InputLabelProps={{ style: { fontSize: size === 'small' ? '14px' : '16px' } }}
         sx={{
            width: width,
            '& label.Mui-focused': {
               color: color
            },
            '& .MuiInput-underline:after': {
               borderBottomColor: color
            },
            '& .MuiOutlinedInput-root': {
               '& fieldset': {
                  borderColor: darkMode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'
               },
               '&:hover fieldset': {
                  borderColor: color
               },
               '&.Mui-focused fieldset': {
                  borderColor: color
               }
            }
         }}
      />
   );
};

export default CustomizedTextfield;