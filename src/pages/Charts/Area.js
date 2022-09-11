import React from 'react';
import ChartPage from '../../components/UI/ChartPage';
import AreaChart from '../../components/Charts/AreaChart';

const Area = () => {
   return (
      <ChartPage
         title='Area Chart'
         marginBottom='3.5rem'
         Chart={AreaChart}
      />
   );
};

export default Area;