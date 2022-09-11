import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import CardHeader from '../UI/CardHeader';
import img from '../../data/product9.jpg';
import PrimaryButton from '../UI/PrimaryButton';
import { uiContext } from '../../context/ContextProvider';
import { useContext } from 'react';

const DailyActivities = () => {
   const { currentColor } = useContext(uiContext);

   return (
      <Card elevation={0} className='card-padding'>
         <CardHeader text='Daily Activities' actionMenu={true} />
         <img
            src={img}
            alt=''
            style={{
               height: '175px',
               width: '100%',
               objectFit: 'cover'
            }}
         />
         <Box sx={{ marginTop: '1.5rem' }}>
            <Typography sx={{ fontWeight: 500, color: 'text.primary' }}>React 18 coming soon!</Typography>
            <Typography sx={{ fontSize: '14px', color: 'text.disabled' }}>By Jonathan Doe</Typography>
            <Typography sx={{ fontSize: '13px', color: 'text.secondary', margin: '1rem 0' }}>
               This will be the small description for the news you have shown here. There could be some great info.
            </Typography>
         </Box>
         <PrimaryButton text='Read More' padding='6px 20px' color={currentColor} />
      </Card>
   );
};

export default DailyActivities;