import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, Tooltip, StackingColumnSeries } from '@syncfusion/ej2-react-charts';
import { useContext } from 'react';
import { uiContext } from '../../context/ContextProvider';

const StackedColumnChart = ({ height, width }) => {
   const { currentColor, secondaryColor, darkMode } = useContext(uiContext);

   const data1 = [
      { x: 'Jan', y: 270, color: currentColor },
      { x: 'Feb', y: 280, color: currentColor },
      { x: 'Mar', y: 200, color: currentColor },
      { x: 'Apr', y: 300, color: currentColor },
      { x: 'May', y: 275, color: currentColor },
      { x: 'Jun', y: 280, color: currentColor }
   ];

   const data2 = [
      { x: 'Jan', y: 80, color: secondaryColor },
      { x: 'Feb', y: 100, color: secondaryColor },
      { x: 'Mar', y: 125, color: secondaryColor },
      { x: 'Apr', y: 70, color: secondaryColor },
      { x: 'May', y: 75, color: secondaryColor },
      { x: 'Jun', y: 90, color: secondaryColor }
   ];

   return (
      <ChartComponent
         style={{ textAlign: "center" }}
         primaryXAxis={{
            valueType: 'Category',
            interval: 1,
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            labelStyle: {
               size: '12px',
               color: '#a19fad'
            },
            labelIntersectAction: 'Rotate90'
         }}
         primaryYAxis={{
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            minimum: 100,
            maximum: 400,
            interval: 100,
            labelStyle: {
               size: '12px',
               color: '#a19fad'
            }
         }}
         chartArea={{ border: { width: 0 } }}
         tooltip={{ enable: true }}
         height={height}
         width={width}
         background={darkMode === 'dark' ? '#282c34' : 'white'}
      >
         <Inject services={[StackingColumnSeries, Tooltip, Category]} />
         <SeriesCollectionDirective>
            <SeriesDirective
               dataSource={data1}
               xName='x'
               yName='y'
               name='UK'
               type='StackingColumn'
               columnWidth={0.5}
               pointColorMapping='color'
               columnSpacing={0.25}
            />
            <SeriesDirective
               dataSource={data2}
               xName='x'
               yName='y'
               name='Germany'
               type='StackingColumn'
               columnWidth={0.5}
               pointColorMapping='color'
               columnSpacing={0.25}
               cornerRadius={{ topLeft: 5, topRight: 5 }}
            />
         </SeriesCollectionDirective>
      </ChartComponent>
   );
};

export default StackedColumnChart;