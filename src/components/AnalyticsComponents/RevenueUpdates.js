import React, { useRef } from 'react';
import { Card } from '@mui/material';
import LineChart from '../Charts/LineChart';
import CardHeader from '../UI/CardHeader';
import ResizeHook from '../../Hooks/ResizeHook';

const RevenueUpdates = ({ width, height }) => {
   const targetRef = useRef();
   const mainWidth = ResizeHook(targetRef);

   return (
      <Card
         elevation={0}
         className='card-padding'
         sx={{
            paddingBottom: '20px',
            width: width,
            minHeight: '200px'
         }}
         ref={targetRef}
      >
         <CardHeader text='Revenue Updates' selectMenu={true} />
         <LineChart height={height} width={`${mainWidth}`} />
      </Card>
   );
};

export default RevenueUpdates;