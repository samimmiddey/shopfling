import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import { useContext } from 'react';
import { uiContext } from '../../context/ContextProvider';
import { Button } from '@mui/material';
import LightenDarkenColor from '../../Hooks/LightenDarkenColor';

const BackToTop = () => {
   const [visible, setVisible] = useState(false);
   const { secondaryColor } = useContext(uiContext);

   const hoverBg = LightenDarkenColor(secondaryColor, 15);

   useEffect(() => {
      window.addEventListener("scroll", () => {
         if (window.pageYOffset > 100) {
            setVisible(true);
         } else {
            setVisible(false);
         }
      });
   }, []);

   const handleClick = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   };

   return (
      <Zoom in={visible}>
         <Box
            onClick={handleClick}
            sx={theme => ({
               position: 'fixed',
               bottom: '100px',
               right: '35px',
               zIndex: 999,
               [theme.breakpoints.down('xl')]: {
                  right: '30px'
               },
               [theme.breakpoints.down('lg')]: {
                  right: '24px'
               },
               [theme.breakpoints.down('md')]: {
                  right: '18px'
               },
               [theme.breakpoints.down('sm')]: {
                  bottom: '90px',
                  right: '15px'
               }
            })}
         >
            <Button
               variant='contained'
               sx={{
                  minWidth: 0,
                  minHeght: 0,
                  padding: '8px',
                  borderRadius: '50%',
                  backgroundColor: secondaryColor,
                  color: 'white',
                  transition: '300ms ease',
                  '&:hover': {
                     backgroundColor: hoverBg
                  }
               }}
            >
               <KeyboardArrowUpIcon sx={{ fontSize: '2rem' }} />
            </Button>
         </Box>
      </Zoom>
   );
}

export default BackToTop;