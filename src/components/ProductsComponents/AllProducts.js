import React, { useState, useContext } from 'react';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { ProductCardData } from '../../data/data';
import CustomPagination from '../UI/CustomPagination';
import ProductCard from '../UI/ProductCard';
import { uiContext } from '../../context/ContextProvider';

const AllProducts = () => {
   const [page, setPage] = useState(1);
   const { setProductID } = useContext(uiContext);

   const theme = useTheme();
   const xlWidth = useMediaQuery(theme.breakpoints.down('xl'));
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   const itemsPerPage = xlWidth && !mdWidth && !smWidth ? 9 : xlWidth && mdWidth && !smWidth ? 6 : xlWidth && mdWidth && smWidth ? 5 : 8;
   const indexOfLastItem = page * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;

   let pageNumbers = 0;

   for (let i = 1; i <= Math.ceil(ProductCardData.length / itemsPerPage); i++) {
      pageNumbers++;
   }

   const handleChangePage = (page) => {
      setPage(page);
   };

   return (
      <>
         <Grid spacing={smWidth ? 2 : 3} container>
            {ProductCardData.slice(indexOfFirstItem, indexOfLastItem).map((product, index) => (
               <Grid
                  sx={{
                     transition: "transform 0.15s ease-in-out",
                     "&:hover": {
                        transform: "scale3d(1.03, 1.03, 1)"
                     },
                     display: 'flex',
                     justifyContent: 'center'
                  }}
                  key={index}
                  item x={12} sm={6} md={4} xl={3}
                  onClick={() => setProductID(`${product.name.split(' ').join('').toLowerCase()}`)}
               >
                  <ProductCard
                     product={product}
                     path={`/products/${product.name.split(' ').join('').toLowerCase()}`}
                  />
               </Grid>
            ))}
         </Grid>
         <CustomPagination
            page={page}
            pageNumbers={pageNumbers}
            handleChangePage={handleChangePage}
            padding='1.5rem 0 0 0'
         />
      </>
   )
}

export default AllProducts