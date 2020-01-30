import React, { Component } from 'react';
import CanvasJSReact from '../../Assets/Scripts/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ColumnChart extends Component {
		render() {
		const options = {
            animationEnabled: true,
            backgroundColor: "transparent",
            height: 220,
			width: 300,
			data: [
			{
				color: "#CA1905",
				type: "column",
				dataPoints: [
					{ label: "Jan",  y: 34.55  },
					{ label: "Feb", y: 0 },
					{ label: "March", y: 0  },
					{ label: "April",  y: 0  },
					{ label: "May",  y: 0  }
                ]
			}
			]
		}
		
		return (
		<div>
			<CanvasJSChart   color="red" options = {options} 
				 onRef={ref => this.chart = ref} 
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default ColumnChart;