import React, { Component } from 'react';
import {options} from './ChartData/chartdata'
import CanvasJSReact from '../../Assets/Scripts/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class DoughnutChart extends Component {
	render() {
		return (
		<div>
			<CanvasJSChart options = {options} 
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default DoughnutChart;