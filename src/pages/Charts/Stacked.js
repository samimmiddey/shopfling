import React from 'react';
import ChartPage from '../../components/UI/ChartPage';
import StackedColumnChart from '../../components/Charts/StackedColumnChart';

const Stacked = () => {
   return (
      <ChartPage
         title='Stacked Chart'
         marginBottom='3.5rem'
         Chart={StackedColumnChart}
      />
   );
};

export default Stacked;