import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import OrderTable from '../components/OrderComponents/OrderTable';

const Orders = () => {
   return (
      <Box className='container'>
         <Card elevation={0} className='card-padding'>
            <Typography
               sx={theme => ({
                  fontSize: '2rem',
                  fontWeight: 600,
                  marginBottom: '2rem',
                  [theme.breakpoints.down('lg')]: {
                     fontSize: '1.75rem'
                  },
                  [theme.breakpoints.down('sm')]: {
                     fontSize: '1.5rem',
                     marginBottom: '1.5rem'
                  }
               })}
            >
               Orders
            </Typography>
            <OrderTable />
         </Card>
      </Box>
   );
};

export default Orders;