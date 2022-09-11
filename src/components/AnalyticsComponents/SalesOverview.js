import { Box, Card, Typography } from '@mui/material';
import React, { useContext, useRef } from 'react';
import { uiContext } from '../../context/ContextProvider';
import ResizeHook from '../../Hooks/ResizeHook';
import ColumnChart from '../Charts/ColumnChart';

const SalesOverview = () => {
   const { currentColor, secondaryColor } = useContext(uiContext);

   const targetRef = useRef();
   const mainWidth = ResizeHook(targetRef);

   return (
      <Card
         elevation={0}
         className='card-padding'
         sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
         }}
         ref={targetRef}
      >
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'space-between',
               alignItems: 'center',
               marginBottom: '2rem'
            }}
         >
            <Typography
               sx={theme => ({
                  color: 'text.primary',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  [theme.breakpoints.down('lg')]: {
                     fontSize: '1.15rem'
                  },
                  [theme.breakpoints.down('sm')]: {
                     fontSize: '1rem'
                  }
               })}
            >
               Sales Overview
            </Typography>
            <Box>
               <Box
                  sx={theme => ({
                     display: 'flex',
                     alignItems: 'center',
                     columnGap: '16px',
                     [theme.breakpoints.down('xs')]: {
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                     }
                  })}
               >
                  {['Ample', 'Pixel Admin'].map((text, index) => (
                     <Box
                        key={index}
                        sx={{
                           display: 'flex',
                           alignItems: 'center',
                           columnGap: '8px'
                        }}
                     >
                        <Box
                           sx={{
                              height: '10px',
                              width: '10px',
                              backgroundColor: index === 0 ? currentColor : secondaryColor,
                              borderRadius: '50%'
                           }}
                        />
                        <Typography
                           sx={{
                              fontSize: '14px',
                              color: index === 0 ? currentColor : secondaryColor
                           }}
                        >
                           {text}
                        </Typography>
                     </Box>
                  ))}
               </Box>
            </Box>
         </Box>
         <ColumnChart height='290px' width={`${mainWidth}`} />
      </Card>
   );
};

export default SalesOverview;