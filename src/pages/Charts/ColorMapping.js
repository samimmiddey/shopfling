import React from 'react';
import ChartPage from '../../components/UI/ChartPage';
import ColorMappingChart from '../../components/Charts/ColorMappingChart';

const ColorMapping = () => {
   return (
      <ChartPage
         title='Color Mapping Chart'
         marginBottom='3.5rem'
         Chart={ColorMappingChart}
      />
   );
};

export default ColorMapping;