import React from 'react';
import { Button } from '@mui/material';
import LightenDarkenColor from '../../Hooks/LightenDarkenColor';

const PrimaryButton = ({ text, width, padding, color, height, variant, textColor, borderColor }) => {
   const hoverBg = LightenDarkenColor(color, 15);

   return (
      <Button
         variant={variant ? variant : 'contained'}
         disableElevation
         sx={theme => ({
            width: width,
            minHeight: height ? height : 0,
            minWidth: 0,
            padding: padding ? padding : '8px 0',
            backgroundColor: variant ? '' : color,
            color: textColor ? textColor : 'white',
            transition: '300ms ease',
            textTransform: 'none',
            borderColor: borderColor,
            '&:hover': {
               backgroundColor: variant ? '' : hoverBg,
               borderColor: borderColor
            },
            [theme.breakpoints.down('lg')]: {
               padding: padding ? padding : '6px 0'
            }
         })}
      >
         {text}
      </Button>
   );
};

export default PrimaryButton;