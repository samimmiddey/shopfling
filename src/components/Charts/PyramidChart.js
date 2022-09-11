import React, { useContext } from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection } from '@syncfusion/ej2-react-charts';
import { uiContext } from '../../context/ContextProvider';
import { useMediaQuery, useTheme } from '@mui/material';

const PyramidChart = ({ height, width }) => {
   const { currentColor, secondaryColor, darkMode } = useContext(uiContext);

   const theme = useTheme();
   const xsWidth = useMediaQuery(theme.breakpoints.down('xs'));

   const PyramidData = [
      { x: 'Sweet Treats', y: 346, text: '346 cal', color: currentColor },
      { x: 'Milk, Youghnut, Cheese', y: 435, text: '435 cal', color: secondaryColor },
      { x: 'Vegetables', y: 470, text: '470 cal', color: 'rgb(106, 195, 253)' },
      { x: 'Meat, Poultry, Fish', y: 475, text: '475 cal' },
      { x: 'Fruits', y: 520, text: '520 cal' },
      { x: 'Bread, Rice, Pasta', y: 650, text: '650 cal', color: 'rgb(255, 168, 0)' }
   ];

   return (
      <AccumulationChartComponent
         id="pyramid-chart"
         legendSettings={{
            textStyle: { color: '#a19fad' },
            position: 'Bottom'
         }}
         tooltip={{ enable: true }}
         background={darkMode === 'dark' ? '#282c34' : 'white'}
         height={height}
         width={width}
      >
         <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]} />
         <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
               name="Food"
               dataSource={PyramidData}
               xName="x"
               yName="y"
               type="Pyramid"
               width={xsWidth ? '80%' : '45%'}
               height="80%"
               neckWidth="15%"
               gapRatio={0.03}
               explode
               pointColorMapping='color'
               emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
               dataLabel={{
                  visible: true,
                  position: 'Inside',
                  name: 'text',
                  font: {
                     color: darkMode === 'dark' ? 'white' : '#333'
                  }
               }}
            />
         </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
   );
};

export default PyramidChart;