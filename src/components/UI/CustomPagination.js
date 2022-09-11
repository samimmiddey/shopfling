import { Pagination } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { uiContext } from '../../context/ContextProvider';

const CustomPagination = ({ page, pageNumbers, handleChangePage, padding }) => {
   const { currentColor } = useContext(uiContext);

   return (
      <Pagination
         showFirstButton
         showLastButton
         sx={{
            padding: padding,
            '& .MuiPaginationItem-root': {
               '&.Mui-selected': {
                  background: currentColor,
                  color: 'white',
                  '&:hover': {
                     background: currentColor,
                     color: 'white'
                  }
               }
            }
         }}
         count={pageNumbers}
         onChange={(event, page) => handleChangePage(page)}
         page={page}
      />
   );
};

export default CustomPagination;