import React from 'react';
import { useContext } from 'react';
import { uiContext } from '../../context/ContextProvider';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, AccumulationTooltip, Inject, AccumulationLegend, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';

const PieChartTwo = ({ height, width }) => {
   const { currentColor, secondaryColor, darkMode } = useContext(uiContext);

   const data = [
      { x: 'Labour', y: 18, text: '18%', color: currentColor },
      { x: 'Legal', y: 8, text: '8%', color: secondaryColor },
      { x: 'Production', y: 15, text: '15%', color: 'rgb(106, 195, 253)' },
      { x: 'License', y: 11, text: '11%' },
      { x: 'Facilities', y: 18, text: '18%' },
      { x: 'Taxes', y: 14, text: '14%', color: 'rgb(255, 168, 0)' },
      { x: 'Insurance', y: 16, text: '16%' }
   ];

   return (
      <AccumulationChartComponent
         enableSmartLabels={true}
         legendSettings={{
            visible: true,
            textStyle: { color: '#a19fad' }
         }}
         tooltip={{ enable: true }}
         height={height}
         width={width}
         margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
         titleStyle={{
            fontFamily: "Arial",
            fontStyle: 'italic',
            fontWeight: 'regular',
            color: "#E27F2D",
            size: '23px'
         }}
         background={darkMode === 'dark' ? '#282c34' : 'white'}
      >
         <Inject services={[PieSeries, AccumulationTooltip, AccumulationLegend, AccumulationDataLabel]} />
         <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
               dataSource={data}
               xName='x'
               yName='y'
               innerRadius='50%'
               startAngle={0}
               endAngle={360}
               radius='90%'
               legendShape='Circle'
               pointColorMapping='color'
               explode
               explodeOffset="10%"
               explodeIndex={2}
               dataLabel={{
                  visible: true,
                  name: 'text',
                  position: 'Inside',
                  font: {
                     fontWeight: '600',
                     color: '#fff'
                  }
               }}
            >
            </AccumulationSeriesDirective>
         </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
   );
};

export default PieChartTwo;