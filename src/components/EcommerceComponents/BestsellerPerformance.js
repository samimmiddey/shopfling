import { Box, Button, Card, Typography } from '@mui/material';
import React, { useContext, useRef } from 'react';
import { uiContext } from '../../context/ContextProvider';
import SplineChart from '../Charts/SplineChart';
import StackedColumnChart from '../Charts/StackedColumnChart';
import PrimaryButton from '../UI/PrimaryButton';
import ResizeHook from './../../Hooks/ResizeHook';

const data = [
   {
      amount: '$98,678',
      title: 'Budget',
      percentage: '23%'
   },
   {
      amount: '$35,254',
      title: 'Expense'
   }
];

const ProductsPerformance = () => {
   const { currentColor, secondaryColor, darkMode } = useContext(uiContext);

   const targetRef1 = useRef();
   const targetRef2 = useRef();
   const mainWidth1 = ResizeHook(targetRef1);
   const mainWidth2 = ResizeHook(targetRef2);

   return (
      <Card elevation={0} className='card-padding'>
         {/* Header Section */}
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'space-between',
               alignItems: 'center',
               marginBottom: '2rem'
            }}
         >
            <Typography
               sx={theme => ({
                  color: 'text.primary',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  [theme.breakpoints.down('lg')]: {
                     fontSize: '1.15rem'
                  },
                  [theme.breakpoints.down('sm')]: {
                     fontSize: '1rem'
                  }
               })}
            >
               Bestseller Performance
            </Typography>
            <Box>
               <Box
                  sx={theme => ({
                     display: 'flex',
                     alignItems: 'center',
                     columnGap: '16px',
                     [theme.breakpoints.down('xs')]: {
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                     }
                  })}
               >
                  {['Expense', 'Budget'].map((text, index) => (
                     <Box
                        key={index}
                        sx={{
                           display: 'flex',
                           alignItems: 'center',
                           columnGap: '8px'
                        }}
                     >
                        <Box
                           sx={{
                              height: '10px',
                              width: '10px',
                              backgroundColor: index === 0 ? currentColor : secondaryColor,
                              borderRadius: '50%'
                           }}
                        />
                        <Typography
                           sx={{
                              fontSize: '14px',
                              color: index === 0 ? currentColor : secondaryColor
                           }}
                        >
                           {text}
                        </Typography>
                     </Box>
                  ))}
               </Box>
            </Box>
         </Box>
         {/* Second Section */}
         <Box
            sx={{
               display: 'grid',
               gridTemplateColumns: 'repeat(12, 1fr)',
               gap: '10px'
            }}
         >
            <Box
               sx={theme => ({
                  gridColumn: '1 / 6',
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '1.5rem',
                  alignItems: 'flex-start',
                  borderRight: darkMode === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.12)',
                  padding: '10px 0',
                  width: '100%',
                  [theme.breakpoints.down('md')]: {
                     gridColumn: '1 / 13',
                     borderRight: 'none',
                     marginBottom: '2rem'
                  },
                  [theme.breakpoints.down('sm')]: {
                     rowGap: '1rem',
                     padding: 0
                  }
               })}
               ref={targetRef1}
            >
               {data.map((item, index) => (
                  <Box key={index}>
                     <Box
                        sx={{
                           display: 'flex',
                           alignItems: 'center',
                           columnGap: '10px'
                        }}
                     >
                        <Typography
                           sx={theme => ({
                              fontSize: '1.75rem',
                              fontWeight: 500,
                              [theme.breakpoints.down('lg')]: {
                                 fontSize: '1.5rem'
                              },
                              [theme.breakpoints.down('sm')]: {
                                 fontSize: '1.35rem'
                              }
                           })}
                        >
                           {item.amount}
                        </Typography>
                        {index === 0 &&
                           <Button
                              variant='contained'
                              disableElevation
                              sx={{
                                 minWidth: 0,
                                 minHeight: 0,
                                 padding: '6px',
                                 borderRadius: '50%',
                                 transition: '300ms ease',
                                 backgroundColor: '#00c292',
                                 fontSize: '10px',
                                 color: 'white',
                                 '&:hover': {
                                    backgroundColor: '#00c292'
                                 }
                              }}>
                              {item.percentage}
                           </Button>
                        }
                     </Box>
                     <Typography sx={{ color: 'text.secondary', fontSize: '15px' }}>{item.title}</Typography>
                  </Box>
               ))}
               <Box sx={theme => ({
                  width: '93%',
                  [theme.breakpoints.down('md')]: {
                     width: '100%'
                  }
               })}
               >
                  <SplineChart
                     height='80px'
                     width={`${mainWidth1}`}
                     fillColor={currentColor}
                     backgroundColor={darkMode === 'dark' ? '#282c34' : 'white'}
                  />
                  <PrimaryButton text='Download Report' padding='8px 20px' color={currentColor} />
               </Box>
            </Box>
            <Box
               sx={theme => ({
                  gridColumn: '6/13',
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  [theme.breakpoints.down('md')]: {
                     gridColumn: '1 / 13'
                  }
               })}
               ref={targetRef2}
            >
               <Box sx={{ width: '100%' }}>
                  <StackedColumnChart
                     height='275px'
                     width={`${mainWidth2}`}
                  />
               </Box>
            </Box>
         </Box>
      </Card>
   );
};

export default ProductsPerformance;