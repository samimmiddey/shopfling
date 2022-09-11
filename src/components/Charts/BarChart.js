import React, { useContext } from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, Tooltip, ColumnSeries } from '@syncfusion/ej2-react-charts';
import { uiContext } from '../../context/ContextProvider';

const BarChart = ({ height, width }) => {
   const { currentColor } = useContext(uiContext);

   const data = [
      { month: 'Jan', value: 58, color: 'rgba(255, 255, 255, 0.75)' },
      { month: 'Feb', value: 69, color: 'rgba(255, 255, 255, 0.75)' },
      { month: 'Mar', value: 63, color: 'rgba(255, 255, 255, 0.75)' },
      { month: 'Apr', value: 60, color: 'rgba(255, 255, 255, 0.75)' },
      { month: 'May', value: 65, color: 'rgba(255, 255, 255, 0.75)' },
      { month: 'Jun', value: 55, color: 'rgba(255, 255, 255, 0.75)' },
      { month: 'Jul', value: 67, color: 'rgba(255, 255, 255, 0.75)' },
      { month: 'Aug', value: 71, color: 'rgba(255, 255, 255, 0.75)' },
      { month: 'Sep', value: 62, color: 'rgba(255, 255, 255, 0.75)' },
      { month: 'Oct', value: 59, color: 'rgba(255, 255, 255, 0.75)' },
      { month: 'Nov', value: 76, color: 'rgba(255, 255, 255, 0.75)' },
      { month: 'Dec', value: 64, color: 'rgba(255, 255, 255, 0.75)' }
   ];

   return (
      <ChartComponent
         primaryXAxis={{
            valueType: "Category",
            visible: false
         }}
         primaryYAxis={{
            minimum: 0,
            maximum: 100,
            visible: false
         }}
         height='60px'
         width={width}
         chartArea={{ border: { width: 0 } }}
         tooltip={{ enable: true }}
         background={currentColor}
         margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
      >
         <Inject services={[ColumnSeries, Category, Tooltip]} />
         <SeriesCollectionDirective>
            <SeriesDirective
               type="Column"
               dataSource={data}
               name="Monthly Earnings"
               xName="month"
               yName="value"
               columnWidth={0.25}
               pointColorMapping='color'
            />
            <SeriesDirective />
         </SeriesCollectionDirective>
      </ChartComponent>
   );
};

export default BarChart;