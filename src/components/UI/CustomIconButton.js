import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { uiContext } from '../../context/ContextProvider';

const CustomIconButton = ({ text, index, iconColor, bgColor, padding, borderRadius, margin }) => {
   const { currentColor, secondaryColor } = useContext(uiContext);

   return (
      <Button
         variant='contained'
         disableElevation
         sx={{
            minWidth: 0,
            minHeight: 0,
            padding: padding,
            margin: margin,
            borderRadius: borderRadius ? borderRadius : '50%',
            transition: '300ms ease',
            backgroundColor: index === 0 ? currentColor : index === 1 ? secondaryColor : bgColor,
            color: iconColor,
            '&:hover': {
               backgroundColor: index === 0 ? currentColor : index === 1 ? secondaryColor : bgColor
            }
         }}
      >
         {text}
      </Button>
   );
};

export default CustomIconButton;