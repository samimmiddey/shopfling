import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';
import { useContext } from 'react';
import { uiContext } from '../../context/ContextProvider';

const ColorMappingChart = ({ height, width }) => {
   const { currentColor, secondaryColor, darkMode } = useContext(uiContext);

   const colorMappingData = [
      [
         { x: 'Jan', y: 6.96 },
         { x: 'Feb', y: 8.9 },
         { x: 'Mar', y: 12 },
         { x: 'Apr', y: 17.5 },
         { x: 'May', y: 22.1 },
         { x: 'June', y: 25 },
         { x: 'July', y: 29.4 },
         { x: 'Aug', y: 29.6 },
         { x: 'Sep', y: 25.8 },
         { x: 'Oct', y: 21.1 },
         { x: 'Nov', y: 15.5 },
         { x: 'Dec', y: 9.9 },
      ],
      ['rgb(255, 168, 0)'],
      [secondaryColor],
      [currentColor]
   ];

   const rangeColorMapping = [
      {
         label: '1°C to 10°C',
         start: '1',
         end: '10',
         colors: colorMappingData[1]
      },

      {
         label: '11°C to 20°C',
         start: '11',
         end: '20',
         colors: colorMappingData[2]
      },

      {
         label: '21°C to 30°C',
         start: '21',
         end: '30',
         colors: colorMappingData[3]
      },

   ];

   const ColorMappingPrimaryXAxis = {
      valueType: 'Category',
      majorGridLines: { width: 0 },
      title: 'Months',
      labelStyle: {
         size: '12px',
         color: '#a19fad'
      },
      labelIntersectAction: 'Rotate90',
      titleStyle: {
         size: '8px', opacity: 0
      }
   };

   const ColorMappingPrimaryYAxis = {
      lineStyle: { width: 0 },
      majorTickLines: { width: 0 },
      minorTickLines: { width: 0 },
      labelFormat: '{value}°C',
      labelStyle: {
         size: '12px',
         color: '#a19fad'
      }
   };

   return (
      <ChartComponent
         id="charts"
         primaryXAxis={ColorMappingPrimaryXAxis}
         primaryYAxis={ColorMappingPrimaryYAxis}
         chartArea={{ border: { width: 0 } }}
         legendSettings={{
            mode: 'Range',
            textStyle: { color: '#a19fad' }
         }}
         tooltip={{ enable: true }}
         background={darkMode === 'dark' ? '#282c34' : 'white'}
         height={height}
         width={width}
      >
         <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
         <SeriesCollectionDirective>
            <SeriesDirective
               dataSource={colorMappingData[0]}
               name="USA"
               xName="x"
               yName="y"
               type="Column"
               cornerRadius={{
                  topLeft: 10,
                  topRight: 10,
               }}
            />
         </SeriesCollectionDirective>
         <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) =>
               <RangeColorSettingDirective
                  key={index}
                  {...item}
               />)}
         </RangeColorSettingsDirective>
      </ChartComponent>
   );
};

export default ColorMappingChart;