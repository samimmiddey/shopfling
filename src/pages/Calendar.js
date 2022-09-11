import { Box, Typography } from '@mui/material';
import React from 'react';
import CalendarApp from '../components/CalendarComponents/CalendarApp';

const Calendar = () => {
   return (
      <Box className='container'>
         <Typography
            sx={theme => ({
               fontSize: '2rem',
               fontWeight: 600,
               marginBottom: '2rem',
               color: 'text.primary',
               [theme.breakpoints.down('lg')]: {
                  fontSize: '1.75rem'
               },
               [theme.breakpoints.down('sm')]: {
                  fontSize: '1.5rem',
                  marginBottom: '1.5rem'
               }
            })}
         >
            Calender App
         </Typography>
         <CalendarApp />
      </Box>
   );
};

export default Calendar;