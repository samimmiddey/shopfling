import React, { useContext } from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, Tooltip, ColumnSeries } from '@syncfusion/ej2-react-charts';
import { uiContext } from '../../context/ContextProvider';

const ColumnChart = ({ height, width }) => {
   const { currentColor, secondaryColor, darkMode } = useContext(uiContext);

   const data1 = [
      { x: 'Jan', y: 350, color: currentColor },
      { x: 'Feb', y: 390, color: currentColor },
      { x: 'Mar', y: 300, color: currentColor },
      { x: 'Apr', y: 370, color: currentColor },
      { x: 'May', y: 290, color: currentColor },
      { x: 'Jun', y: 330, color: currentColor }
   ];

   const data2 = [
      { x: 'Jan', y: 280, color: secondaryColor },
      { x: 'Feb', y: 250, color: secondaryColor },
      { x: 'Mar', y: 325, color: secondaryColor },
      { x: 'Apr', y: 215, color: secondaryColor },
      { x: 'May', y: 270, color: secondaryColor },
      { x: 'Jun', y: 310, color: secondaryColor }
   ];

   return (
      <ChartComponent
         style={{ textAlign: "center" }}
         primaryXAxis={{
            valueType: 'Category',
            interval: 1,
            majorGridLines: { width: 0 },
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
         <Inject services={[ColumnSeries, Tooltip, Category]} />
         <SeriesCollectionDirective>
            <SeriesDirective
               dataSource={data1}
               xName='x'
               yName='y'
               name='Gold'
               type='Column'
               columnWidth={0.5}
               pointColorMapping='color'
               columnSpacing={0.25}
               cornerRadius={{ topLeft: 5, topRight: 5 }}
            />
            <SeriesDirective
               dataSource={data2}
               xName='x'
               yName='y'
               name='Silver'
               type='Column'
               columnWidth={0.5}
               pointColorMapping='color'
               columnSpacing={0.25}
               cornerRadius={{ topLeft: 5, topRight: 5 }}
            />
         </SeriesCollectionDirective>
      </ChartComponent>
   );
};

export default ColumnChart