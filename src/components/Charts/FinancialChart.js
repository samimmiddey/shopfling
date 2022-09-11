import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloOpenCloseSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair } from '@syncfusion/ej2-react-charts';
import { financialChartData } from '../../data/data';
import { useContext } from 'react';
import { uiContext } from '../../context/ContextProvider';

const FinancialChart = ({ height, width }) => {
   const { currentColor, secondaryColor, darkMode } = useContext(uiContext);

   const FinancialPrimaryXAxis = {
      valueType: 'DateTime',
      minimum: new Date('2016, 12, 31'),
      maximum: new Date('2017, 9, 30'),
      crosshairTooltip: { enable: true },
      majorGridLines: { width: 0 },
      labelPlacement: 'OnTicks',
      edgeLabelPlacement: 'Shift',
      labelStyle: {
         size: '12px',
         color: '#a19fad'
      },
      labelIntersectAction: 'Rotate90'
   };

   const FinancialPrimaryYAxis = {
      minimum: 100,
      maximum: 180,
      interval: 20,
      lineStyle: { width: 0 },
      majorTickLines: { width: 0 },
      labelStyle: {
         size: '12px',
         color: '#a19fad'
      }
   };

   return (
      <ChartComponent
         id="charts"
         primaryXAxis={FinancialPrimaryXAxis}
         primaryYAxis={FinancialPrimaryYAxis}
         chartArea={{ border: { width: 0 } }}
         tooltip={{ enable: true, shared: true }}
         crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
         height={height}
         width={width}
         background={darkMode === 'dark' ? '#282c34' : 'white'}
      >
         <Inject services={[HiloOpenCloseSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
         <SeriesCollectionDirective>
            <SeriesDirective
               dataSource={financialChartData}
               animation={{ enable: true }}
               xName="x"
               yName="low"
               name="Apple Inc"
               type="HiloOpenClose"
               low="low"
               high="high"
               open='open'
               close='close'
               bearFillColor={currentColor}
               bullFillColor={secondaryColor}
            />
         </SeriesCollectionDirective>
      </ChartComponent>
   );
};

export default FinancialChart;