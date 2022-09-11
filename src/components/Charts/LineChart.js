import React, { useContext } from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';
import { uiContext } from '../../context/ContextProvider';

const LineChart = ({ height, width }) => {
   const { currentColor, secondaryColor, darkMode } = useContext(uiContext);

   const LinePrimaryXAxisData = {
      valueType: 'DateTime',
      labelFormat: 'y',
      intervalType: 'Years',
      labelPlacement: 'OnTicks',
      edgeLabelPlacement: 'Shift',
      majorGridLines: { width: 0 },
      background: 'white',
      interval: 1,
      labelStyle: {
         size: '12px',
         color: '#a19fad'
      },
      labelIntersectAction: 'Rotate90',
      title: 'Countries', titleStyle: {
         size: '8px', opacity: 0
      }
   };

   const LinePrimaryYAxisData = {
      labelFormat: '{value}%',
      rangePadding: 'None',
      minimum: 0,
      maximum: 100,
      interval: 20,
      lineStyle: { width: 0 },
      majorTickLines: { width: 0 },
      minorTickLines: { width: 0 },
      labelStyle: {
         size: '12px',
         color: '#a19fad'
      }
   };

   const lineChartData = [
      [
         { x: new Date(2005, 0, 1), y: 21 },
         { x: new Date(2006, 0, 1), y: 24 },
         { x: new Date(2007, 0, 1), y: 36 },
         { x: new Date(2008, 0, 1), y: 38 },
         { x: new Date(2009, 0, 1), y: 54 },
         { x: new Date(2010, 0, 1), y: 57 },
         { x: new Date(2011, 0, 1), y: 70 },
      ],
      [
         { x: new Date(2005, 0, 1), y: 28 },
         { x: new Date(2006, 0, 1), y: 44 },
         { x: new Date(2007, 0, 1), y: 48 },
         { x: new Date(2008, 0, 1), y: 50 },
         { x: new Date(2009, 0, 1), y: 66 },
         { x: new Date(2010, 0, 1), y: 78 },
         { x: new Date(2011, 0, 1), y: 84 },
      ],

      [
         { x: new Date(2005, 0, 1), y: 10 },
         { x: new Date(2006, 0, 1), y: 20 },
         { x: new Date(2007, 0, 1), y: 30 },
         { x: new Date(2008, 0, 1), y: 39 },
         { x: new Date(2009, 0, 1), y: 50 },
         { x: new Date(2010, 0, 1), y: 70 },
         { x: new Date(2011, 0, 1), y: 100 },
      ],
   ];

   const LineCustomSeriesData = [
      {
         dataSource: lineChartData[1],
         xName: 'x',
         yName: 'y',
         name: 'Earnings',
         width: '2',
         marker: { visible: true, width: 10, height: 10, fill: currentColor },
         type: 'Line',
         fill: currentColor
      },
      {
         dataSource: lineChartData[0],
         xName: 'x',
         yName: 'y',
         name: 'Expenses',
         width: '2',
         marker: { visible: true, width: 10, height: 10, fill: secondaryColor },
         type: 'Line',
         fill: secondaryColor
      }
   ];

   return (
      <ChartComponent
         primaryXAxis={LinePrimaryXAxisData}
         primaryYAxis={LinePrimaryYAxisData}
         chartArea={{ border: { width: 0 } }}
         tooltip={{ enable: true }}
         legendSettings={{
            textStyle: { color: '#a19fad' },
            toggleVisibility: false
         }}
         width={width}
         height={height}
         margin={{ top: 50 }}
         background={darkMode === 'dark' ? '#282c34' : 'white'}
      >
         <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
         <SeriesCollectionDirective>
            {LineCustomSeriesData.map((item, index) => (
               <SeriesDirective
                  key={index}
                  {...item}
                  marker={{
                     visible: true,
                     height: 8,
                     width: 8,
                     shape: 'Circle',
                     fill: index === 0 ? currentColor : secondaryColor
                  }}
                  animation={{
                     enable: true,
                     duration: 1200,
                     delay: 100
                  }}
               />
            ))}
         </SeriesCollectionDirective>
      </ChartComponent>
   );
};

export default LineChart;