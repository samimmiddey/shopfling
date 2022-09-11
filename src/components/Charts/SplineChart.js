import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, Tooltip, SplineSeries } from '@syncfusion/ej2-react-charts';

const SplineChart = ({ height, width, fillColor, backgroundColor }) => {
   const data = [
      { day: 'Sun', value: 30 },
      { day: 'Mon', value: 80 },
      { day: 'Tue', value: 50 },
      { day: 'Wed', value: 80 },
      { day: 'Thu', value: 55 },
      { day: 'Fri', value: 95 },
      { day: 'Sat', value: 50 },
   ];

   return (
      <ChartComponent
         primaryXAxis={{
            valueType: "Category",
            labelPlacement: 'OnTicks',
            edgeLabelPlacement: 'Shift',
            visible: false
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
         background={backgroundColor}
         margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
      >
         <Inject services={[SplineSeries, Category, Tooltip]} />
         <SeriesCollectionDirective>
            <SeriesDirective
               type="Spline"
               dataSource={data}
               name="Monthly Earnings"
               xName="day"
               yName="value"
               fill={fillColor}
               width={2}
            />
            <SeriesDirective />
         </SeriesCollectionDirective>
      </ChartComponent>
   );
};

export default SplineChart;