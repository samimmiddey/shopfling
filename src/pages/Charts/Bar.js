import React from 'react';
import ColumnChart from '../../components/Charts/ColumnChart';
import ChartPage from '../../components/UI/ChartPage';

const Bar = () => {
   return (
      <ChartPage
         title='Bar Chart'
         marginBottom='3.5rem'
         Chart={ColumnChart}
      />
   );
};

export default Bar;