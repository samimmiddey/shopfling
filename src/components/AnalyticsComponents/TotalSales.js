import React, { useContext, useRef } from 'react';
import { uiContext } from '../../context/ContextProvider';
import { Box, Card, Divider, Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PieChart from '../Charts/PieChart';
import CardHeader from '../UI/CardHeader';
import ResizeHook from '../../Hooks/ResizeHook';

const TotalSales = () => {
   const { currentColor, secondaryColor } = useContext(uiContext);

   const targetRef = useRef();
   const mainWidth = ResizeHook(targetRef);

   const data = [
      { year: 2020, y: 35, text: '18%', color: currentColor },
      { year: 2021, y: 25, text: '8%', color: secondaryColor },
      { year: 2022, y: 35, text: '15%', color: 'rgb(236, 240, 242)' }
   ];

   return (
      <Card
         elevation={0}
         className='card-padding'
         ref={targetRef}
      >
         <CardHeader text='Total Sales' selectMenu={true} />
         <Divider />
         <Box
            sx={{
               margin: '1.5rem 0',
               display: 'flex',
               justifyContent: 'space-between',
               alignItems: 'center'
            }}
         >
            <Typography sx={{ color: 'text.secondary' }}>Sales Yearly</Typography>
            <Typography
               sx={theme => ({
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'text.primary',
                  zIndex: 99,
                  [theme.breakpoints.down('sm')]: {
                     fontSize: '1.35rem'
                  }
               })}
            >
               7,456,198
            </Typography>
         </Box>
         <Box
            sx={{
               position: 'relative'
            }}
         >
            <PieChart height='258.69px' width={`${mainWidth}`} data={data} innerRadius='75%' />
            <ShoppingCartOutlinedIcon
               sx={{
                  color: 'text.secondary',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translateX(-50%) translateY(-50%)',
                  fontSize: '2rem'
               }}
            />
         </Box>
         <Box
            sx={{
               display: 'flex',
               alignItems: 'center',
               columnGap: '10px',
               justifyContent: 'center'
            }}
         >
            {data.map((item, index) => (
               <Box
                  key={index}
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     columnGap: '5px',
                     margin: '1.5rem 0 1rem 0'
                  }}
               >
                  <Box
                     sx={{
                        height: '8px',
                        width: '8px',
                        borderRadius: '50%',
                        backgroundColor: data[index].color
                     }}
                  />
                  <Typography sx={{ fontSize: '12px', color: 'text.secondary' }}>
                     {item.year}
                  </Typography>
               </Box>
            ))}
         </Box>
      </Card>
   );
};

export default TotalSales;