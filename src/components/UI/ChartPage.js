import { Box, Card, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { useRef } from 'react';
import ResizeHook from '../../Hooks/ResizeHook';

const ChartPage = ({ title, marginBottom, Chart }) => {
   const targetRef = useRef();
   const mainWidth = ResizeHook(targetRef);

   const theme = useTheme();
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));
   const smWidth = useMediaQuery(theme.breakpoints.down('sm'));

   const height = mdWidth && !smWidth ? '400px' : mdWidth && smWidth ? '350px' : '500px';

   return (
      <Box className='container' sx={{ display: 'grid' }}>
         <Card
            className='card-padding'
            ref={targetRef}
            elevation={0}
         >
            <Typography
               sx={theme => ({
                  fontSize: '2rem',
                  fontWeight: 600,
                  marginBottom: marginBottom,
                  [theme.breakpoints.down('lg')]: {
                     fontSize: '1.75rem'
                  },
                  [theme.breakpoints.down('sm')]: {
                     fontSize: '1.5rem',
                     marginBottom: marginBottom === '1rem' ? '0' : '2.5rem'
                  }
               })}
            >
               {title}
            </Typography>
            <Chart height={height} width={`${mainWidth}`} />
         </Card>
      </Box>
   );
};

export default ChartPage;