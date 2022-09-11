import { Box, Card, Typography } from '@mui/material';
import React, { Fragment, useContext, useRef } from 'react';
import { uiContext } from '../../context/ContextProvider';
import ResizeHook from '../../Hooks/ResizeHook';
import PieChart from '../Charts/PieChart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const YearlySales = () => {
   const { currentColor, secondaryColor } = useContext(uiContext);

   const targetRef = useRef();
   const mainWidth = ResizeHook(targetRef);

   const colors = [currentColor, 'rgb(30, 77, 183)', 'rgb(254, 201, 15)', 'rgb(236, 240, 242)'];

   const data = [
      { year: 2022, y: 35, text: '18%', color: currentColor },
      { year: 2021, y: 25, text: '8%', color: 'rgb(30, 77, 183)' },
      { year: 2020, y: 28, text: '12%', color: 'rgb(254, 201, 15)' },
      { year: 2019, y: 35, text: '15%', color: 'rgb(236, 240, 242)' }
   ];

   return (
      <Card
         elevation={0}
         className='card-padding'
         sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            minHeight: '200px'
         }}
      >
         <Box sx={{
            gridColumn: '1/6',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
         }}
         >
            <Box>
               <Typography
                  sx={theme => ({
                     fontSize: '1.75rem',
                     color: 'text.primary',
                     fontWeight: 500,
                     [theme.breakpoints.down('lg')]: {
                        fontSize: '1.5rem'
                     },
                     [theme.breakpoints.down('sm')]: {
                        fontSize: '1.35rem'
                     }
                  })}
               >
                  45,378
               </Typography>
               <Typography
                  sx={{
                     fontSize: '14px',
                     color: 'text.disabled'
                  }}
               >
                  Yearly Sales
               </Typography>
            </Box>
            <Box>
               {[2022, 2021, 2020, 2019].map((item, index) => (
                  <Fragment key={index}>
                     <Box
                        key={index}
                        sx={{
                           display: 'inline-flex',
                           alignItems: 'center',
                           columnGap: '5px',
                           marginLeft: (index === 1 || index === 3) && '12px',
                           marginTop: (index === 2 || index === 3) && '8px'
                        }}
                     >
                        <Box
                           sx={{
                              height: '8px',
                              width: '8px',
                              borderRadius: '50%',
                              backgroundColor: index === 3 ? secondaryColor : colors[index]
                           }}
                        />
                        <Typography sx={{ fontSize: '12px', color: 'text.secondary' }}>{item}</Typography>
                     </Box>
                     {index === 1 && <br />}
                  </Fragment>
               ))}
            </Box>
         </Box>
         <Box
            sx={{
               gridColumn: '6/13',
               width: '100%',
               alignSelf: 'center',
               position: 'relative'
            }}
            ref={targetRef}
         >
            <PieChart height='125px' width={`${mainWidth}`} data={data} innerRadius='65%' />
            <ShoppingCartOutlinedIcon
               sx={{
                  color: 'text.secondary',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translateX(-50%) translateY(-50%)'
               }}
            />
         </Box>
      </Card >
   );
};

export default YearlySales;