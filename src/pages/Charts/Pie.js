import React from 'react';
import ChartPage from '../../components/UI/ChartPage';
import PieChartTwo from '../../components/Charts/PieChartTwo';

const Pie = () => {
   return (
      <ChartPage
         title='Pie Chart'
         marginBottom='3.5rem'
         Chart={PieChartTwo}
      />
   );
};

export default Pie;