import React, { useContext, useRef } from 'react';
import { Box, Card, Typography } from '@mui/material';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import { uiContext } from '../../context/ContextProvider';
import SplineChart from '../Charts/SplineChart';
import ResizeHook from '../../Hooks/ResizeHook';

const Customers = ({ height, width }) => {
   const { secondaryColor } = useContext(uiContext);

   const targetRef = useRef();
   const mainWidth = ResizeHook(targetRef);

   return (
      <Card
         elevation={0}
         className='card-padding'
         sx={theme => ({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: width,
            height: '100%',
            backgroundColor: secondaryColor,
            [theme.breakpoints.down('lg')]: {
               height: height
            }
         })}
         ref={targetRef}
      >
         <Typography
            sx={theme => ({
               color: 'white',
               fontSize: '1rem',
               fontWeight: 500,
               [theme.breakpoints.down('lg')]: {
                  // fontSize: '15px'
               },
               [theme.breakpoints.down('sm')]: {
                  fontSize: '15px'
               }
            })}
         >
            Customers
         </Typography>
         <SplineChart
            height='60px'
            width={`${mainWidth}`}
            backgroundColor={secondaryColor}
            fillColor='#fff'
         />
         <Box
            sx={{
               display: 'flex',
               alignItems: 'center',
               columnGap: '1rem',
               marginTop: '1rem'
            }}
         >
            <Typography
               sx={theme => ({
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: 'white',
                  zIndex: 99,
                  [theme.breakpoints.down('lg')]: {
                     fontSize: '1.25rem'
                  },
                  [theme.breakpoints.down('sm')]: {
                     fontSize: '1rem'
                  }
               })}
            >
               750
            </Typography>
            <Typography
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '14px',
                  fontWeight: 500,
                  zIndex: 99,
                  color: 'white'
               }}
            >
               <NorthWestIcon sx={{ fontSize: '16px', zIndex: 99 }} /> +9 this week
            </Typography>
         </Box>
      </Card>
   );
};

export default Customers;