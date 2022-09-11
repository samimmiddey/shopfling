import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import CustomersTable from '../components/CustomersComponents/CustomersTable';

const Customers = () => {
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
               Customers
            </Typography>
            <CustomersTable />
         </Card>
      </Box>
   );
};

export default Customers;