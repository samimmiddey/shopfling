import { Box } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import ProductDetails from '../components/UI/ProductDetails';
import { uiContext } from '../context/ContextProvider';

const ProductDetailsPage = () => {
   const { productID } = useContext(uiContext);

   return (
      <Box className='container'>
         <ProductDetails id={productID} />
      </Box>
   );
};

export default ProductDetailsPage;