import React, { useContext } from 'react';

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineAreaSeries, Category, Tooltip } from '@syncfusion/ej2-react-charts';
import { uiContext } from '../../context/ContextProvider';

const data = [
   { x: '03/25/2002', y: 40 },
   { x: '22/04/2004', y: 80 },
   { x: '31/05/2005', y: 50 },
   { x: '12/09/2007', y: 95 }
];

const SplineAreaChart = ({ height, width }) => {
   const { currentColor, darkMode } = useContext(uiContext);

   return (
      <ChartComponent
         id='charts'
         primaryXAxis={{
            valueType: "Category",
            visible: false,
            labelPlacement: 'OnTicks',
            edgeLabelPlacement: 'Shift'
         }}
         primaryYAxis={{
            minimum: 0,
            maximum: 100,
            visible: false
         }}
         height={height}
         width={width}
         chartArea={{ border: { width: 0 } }}
         tooltip={{ enable: true }}
         margin={{ left: -1, right: -1, top: 0, bottom: 0 }}
         background={darkMode === 'dark' ? '#282c34' : 'white'}
      >
         <Inject services={[SplineAreaSeries, Tooltip, Category]} />
         <SeriesCollectionDirective>
            <SeriesDirective dataSource={data}
               xName='x'
               yName='y'
               width={2}
               name='London'
               type='SplineArea'
               fill={`${currentColor}15`}
               border={{ width: 2, color: currentColor }}
            />
         </SeriesCollectionDirective>
      </ChartComponent>
   );
};

export default SplineAreaChart;