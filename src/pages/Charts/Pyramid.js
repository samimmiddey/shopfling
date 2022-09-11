import React from 'react';
import ChartPage from '../../components/UI/ChartPage';
import PyramidChart from '../../components/Charts/PyramidChart';

const Pyramid = () => {
   return (
      <ChartPage
         title='Pyramid Chart'
         marginBottom='1rem'
         Chart={PyramidChart}
      />
   );
};

export default Pyramid;