import { Box, Card, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { FiDollarSign } from 'react-icons/fi';
import { uiContext } from '../../context/ContextProvider';
import CustomIconButton from '../UI/CustomIconButton';

const Earnings = () => {
   const { secondaryColor } = useContext(uiContext);

   return (
      <Card
         elevation={0}
         className='card-padding'
         sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: secondaryColor,
            minHeight: '200px'
         }}
      >
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'space-between'
            }}
         >
            <Typography
               sx={theme => ({
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: 'white',
                  [theme.breakpoints.down('lg')]: {
                     fontSize: '1.1rem'
                  }
               })}
            >
               Earnings
            </Typography>
            <Box>
               <CustomIconButton
                  text={<FiDollarSign style={{ fontSize: '1.5rem' }} />}
                  index={0}
                  iconColor='white'
                  padding='12px'
               />
            </Box>
         </Box>
         <Box>
            <Typography
               sx={theme => ({
                  fontSize: '1.75rem',
                  color: 'white',
                  fontWeight: 500,
                  [theme.breakpoints.down('lg')]: {
                     fontSize: '1.5rem'
                  },
                  [theme.breakpoints.down('sm')]: {
                     fontSize: '1.35rem'
                  }
               })}>
               $95,796
            </Typography>
            <Typography
               sx={theme => ({
                  color: 'rgba(255, 255, 255, 0.5)',
                  [theme.breakpoints.down('sm')]: {
                     fontSize: '14px'
                  }
               })}>
               Monthly Revenue
            </Typography>
         </Box>
      </Card >
   );
};

export default Earnings;