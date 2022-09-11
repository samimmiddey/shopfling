import React, { useContext } from 'react';
import { Box, Card, Divider, Typography } from '@mui/material';
import { uiContext } from '../../context/ContextProvider';
import CardHeader from '../UI/CardHeader';

const data = [
   {
      time: '09.50',
      text: 'Payment received of John Doe of $385.90',
      circleColor: 'rgb(3, 201, 215)'
   },
   {
      time: '09.46',
      text: 'Project Meeting',
      circleColor: 'rgb(251, 150, 120)'
   },
   {
      time: '09.47',
      text: 'New sale recorded #ML-3467',
      circleColor: 'rgb(254, 201, 15)'
   },
   {
      time: '09.48',
      text: 'Payment was made of $64.95 to Michael Anderson',
      circleColor: 'rgb(228, 106, 118)'
   },
   {
      time: '09.49',
      text: 'New payment receipt created for Alphanso Davies',
      circleColor: 'rgb(0, 194, 146)'
   }
];

const DailyActivities = () => {
   const { currentColor, secondaryColor } = useContext(uiContext);

   return (
      <Card
         elevation={0}
         className='card-padding'
      >
         <CardHeader text='Daily Activities' actionMenu={true} />
         <Box
            sx={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'flex-start',
               rowGap: '12px'
            }}
         >
            {data.map((item, index) => (
               <Box
                  key={index}
                  sx={{
                     display: 'flex',
                     columnGap: '16px',
                     alignItems: 'flex-start'
                  }}
               >
                  <Typography
                     sx={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: 'text.primary'
                     }}
                  >
                     {item.time}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                     <Box
                        sx={{
                           marginTop: '5px',
                           height: '12px',
                           width: '12px',
                           borderRadius: '50%',
                           border: `2px solid ${index === 0 ? currentColor : index === 1 ? secondaryColor : item.circleColor}`
                        }}
                     />
                     <Divider
                        orientation="vertical"
                        sx={{
                           height: '22px',
                           marginTop: '12px',
                           borderRightWidth: 2
                        }}
                     />
                  </Box>
                  <Typography
                     sx={{
                        fontSize: '14px',
                        color: 'text.secondary'
                     }}
                  >
                     {item.text}
                  </Typography>
               </Box>
            ))}
         </Box>
      </Card >
   );
};

export default DailyActivities;