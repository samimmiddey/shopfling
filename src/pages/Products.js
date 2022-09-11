import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import AllProducts from '../components/ProductsComponents/AllProducts';

const Products = () => {
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
               Products
            </Typography>
            <AllProducts />
         </Card>
      </Box>
   );
};

export default Products;