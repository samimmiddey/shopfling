import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, AccumulationTooltip, Inject } from '@syncfusion/ej2-react-charts';
import { useContext } from 'react';
import { uiContext } from '../../context/ContextProvider';

const PieChart = ({ height, width, data, innerRadius }) => {
	const { darkMode } = useContext(uiContext);
	
	return (
		<AccumulationChartComponent
			enableSmartLabels={true}
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
			<Inject services={[PieSeries, AccumulationTooltip]} />
			<AccumulationSeriesCollectionDirective>
				<AccumulationSeriesDirective
					dataSource={data}
					xName='year'
					yName='y'
					innerRadius={innerRadius}
					startAngle={0}
					endAngle={360}
					radius='90%'
					legendShape='Circle'
					pointColorMapping='color'
				>
				</AccumulationSeriesDirective>
			</AccumulationSeriesCollectionDirective>
		</AccumulationChartComponent>
	);
};

export default PieChart;