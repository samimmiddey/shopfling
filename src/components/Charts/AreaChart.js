import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, SplineAreaSeries, Legend, Tooltip } from '@syncfusion/ej2-react-charts';
import { useContext } from 'react';
import { uiContext } from '../../context/ContextProvider';

const AreaChart = ({ height, width }) => {
   const { currentColor, secondaryColor, darkMode } = useContext(uiContext);

   const areaPrimaryXAxis = {
      valueType: 'DateTime',
      labelFormat: 'y',
      majorGridLines: { width: 0 },
      intervalType: 'Years',
      labelPlacement: 'OnTicks',
      edgeLabelPlacement: 'Shift',
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

   const areaPrimaryYAxis = {
      labelFormat: '{value}%',
      rangePadding: 'None',
      lineStyle: { width: 0 },
      maximum: 4,
      interval: 1,
      majorTickLines: { width: 0 },
      minorTickLines: { width: 0 },
      labelStyle: {
         size: '12px',
         color: '#a19fad'
      }
   };

   const areaChartData = [
      [
         { x: new Date(2002, 0, 1), y: 2.2 },
         { x: new Date(2003, 0, 1), y: 3.4 },
         { x: new Date(2004, 0, 1), y: 2.8 },
         { x: new Date(2005, 0, 1), y: 1.6 },
         { x: new Date(2006, 0, 1), y: 2.3 },
         { x: new Date(2007, 0, 1), y: 2.5 },
         { x: new Date(2008, 0, 1), y: 2.9 },
         { x: new Date(2009, 0, 1), y: 3.8 },
         { x: new Date(2010, 0, 1), y: 1.4 },
         { x: new Date(2011, 0, 1), y: 3.1 },
      ],
      [
         { x: new Date(2002, 0, 1), y: 2 },
         { x: new Date(2003, 0, 1), y: 1.7 },
         { x: new Date(2004, 0, 1), y: 1.8 },
         { x: new Date(2005, 0, 1), y: 2.1 },
         { x: new Date(2006, 0, 1), y: 2.3 },
         { x: new Date(2007, 0, 1), y: 1.7 },
         { x: new Date(2008, 0, 1), y: 1.5 },
         { x: new Date(2009, 0, 1), y: 2.8 },
         { x: new Date(2010, 0, 1), y: 1.5 },
         { x: new Date(2011, 0, 1), y: 2.3 },
      ],
      [
         { x: new Date(2002, 0, 1), y: 0.8 },
         { x: new Date(2003, 0, 1), y: 1.3 },
         { x: new Date(2004, 0, 1), y: 1.1 },
         { x: new Date(2005, 0, 1), y: 1.6 },
         { x: new Date(2006, 0, 1), y: 2 },
         { x: new Date(2007, 0, 1), y: 1.7 },
         { x: new Date(2008, 0, 1), y: 2.3 },
         { x: new Date(2009, 0, 1), y: 2.7 },
         { x: new Date(2010, 0, 1), y: 1.1 },
         { x: new Date(2011, 0, 1), y: 2.3 },
      ],
   ];

   const areaCustomSeries = [
      {
         dataSource: areaChartData[0],
         xName: 'x',
         yName: 'y',
         name: 'USA',
         opacity: '0.8',
         type: 'SplineArea',
         width: '2',
         marker: { visible: true, width: 10, height: 10, fill: currentColor },
         fill: currentColor

      },
      {
         dataSource: areaChartData[1],
         xName: 'x',
         yName: 'y',
         name: 'France',
         opacity: '0.8',
         type: 'SplineArea',
         width: '2',
         marker: { visible: true, width: 10, height: 10, fill: 'rgb(229, 101, 144)' },
         fill: 'rgb(229, 101, 144)'
      },
      {
         dataSource: areaChartData[2],
         xName: 'x',
         yName: 'y',
         name: 'Germany',
         opacity: '0.8',
         type: 'SplineArea',
         width: '2',
         marker: { visible: true, width: 10, height: 10, fill: secondaryColor },
         fill: secondaryColor
      }
   ];

   return (
      <ChartComponent
         primaryXAxis={areaPrimaryXAxis}
         primaryYAxis={areaPrimaryYAxis}
         chartArea={{ border: { width: 0 } }}
         tooltip={{ enable: true }}
         background={darkMode === 'dark' ? '#282c34' : 'white'}
         legendSettings={{
            textStyle: { color: '#a19fad' },
            toggleVisibility: false
         }}
         height={height}
         width={width}
      >
         <Inject services={[SplineAreaSeries, DateTime, Legend, Tooltip]} />
         <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => <SeriesDirective
               key={index}
               {...item}
               animation={{
                  enable: true,
                  duration: 1200,
                  delay: 100
               }}
            />)}
         </SeriesCollectionDirective>
      </ChartComponent>
   );
};

export default AreaChart;