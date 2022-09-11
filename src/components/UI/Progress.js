import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Backdrop } from '@mui/material';
import { useContext } from 'react';
import { uiContext } from '../../context/ContextProvider';

const Progress = () => {
   const { currentColor, darkMode } = useContext(uiContext);
   return (
      <Box>
         <Backdrop
            sx={{
               backgroundColor: darkMode === 'dark' ? '#16181d' : '#fafbfb',
               color: currentColor,
               zIndex: 60
            }}
            open={true}
         >
            <CircularProgress color="inherit" disableShrink />
         </Backdrop>
      </Box>
   );
}

export default Progress;