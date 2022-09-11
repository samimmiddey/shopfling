import React from 'react';
import { Typography, styled } from '@mui/material';

const UL = styled('span')({
   display: 'flex',
   flexDirection: 'column',
   rowGap: '20px',
   marginTop: '16px'
});

const ResponsiveSpan = styled('span')(({ theme }) => ({
   display: 'flex',
   marginLeft: '16px',
   justifyContent: 'space-between',
   [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      rowGap: '5px',
      marginLeft: 0
   }
}));

const ResponsiveInnerSpan = styled('span')(({ theme }) => ({
   color: '#808080',
   fontSize: '14px',
   width: '60%',
   [theme.breakpoints.down('sm')]: {
      width: '100%'
   }
}));

const ProductCardTabData = ({ details }) => {
   return (
      <span style={{ width: '100%' }}>
         <Typography sx={{ marginBottom: '12px', fontSize: '18px', fontWeight: 600 }} component={'span'}>
            General
         </Typography>
         <UL>
            {details.map((item, index) => (
               <ResponsiveSpan key={index}>
                  <span style={{ color: '#aaa', fontSize: '13px', fontWeight: 600 }}>
                     {item.title}
                  </span>
                  <ResponsiveInnerSpan>
                     {item.data}
                  </ResponsiveInnerSpan>
               </ResponsiveSpan>
            ))}
         </UL>
      </span>
   );
};

export default ProductCardTabData;