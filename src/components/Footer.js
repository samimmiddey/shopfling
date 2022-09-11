import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
   return (
      <Box sx={{ padding: '1.5rem 0 1rem 0', color: 'text.disabled' }}>
         <Typography
            sx={theme => ({
               textAlign: 'center',
               [theme.breakpoints.down('sm')]: {
                  fontSize: '14px'
               }
            })}
         >
            Copyright &copy; 2022, All Rights Reserved
         </Typography>
      </Box>
   );
};

export default Footer;