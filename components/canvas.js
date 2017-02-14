import React, { Component } from 'react';
import Svg,{
    Circle,
    G,
    Line,
	Rect,
	Text as SVGText
} from 'react-native-svg';
import * as scale from 'd3-scale';


export default class Canvas extends Component
{
	
	render()
	{
		const d3 = {scale};
		const width = this.props.width;
		
		let  xScale = d3.scale.scaleLinear()
		.domain([0, 100])
		.range([0,width-40]);
	
 		let	yScale = d3.scale.scaleLinear()
		.domain([0, 100])
		.range([500,0]);
		
		return(
	
			<G >
			
			<Rect
                    x="0"
                    y="0"
                    width={width-40}
                    height="500"
                    stroke="grey"
                    strokeWidth="3"
                    rx="10"
					ry="10"
					fill="none"
                />
			 <Line
				x1="0"
				y1={yScale(25)}
				x2={xScale(100)}
				y2={yScale(25)}
				stroke="grey"
				strokeWidth="1.5"
			/>
			 <Line
				x1="0"
				y1={yScale(50)}
				x2={xScale(100)}
				y2={yScale(50)}
				stroke="grey"
				strokeWidth="1.5"
			/>
			 <Line
				x1="0"
				y1={yScale(75)}
				x2={xScale(100)}
				y2={yScale(75)}
				stroke="grey"
				strokeWidth="1.5"
			/>
			 <Line
				x1={xScale(50)}
				y1={yScale(0)}
				x2={xScale(50)}
				y2={yScale(100)}
				stroke="grey"
				strokeWidth="1.5"
			/>
			
			 <Line
				x1={xScale(50)}
				y1="0"
				x2={xScale(50)}
				y2={yScale(100)}
				stroke="grey"
				strokeWidth="1.5"
			/>
			
			
		<SVGText 
			
			x="15"
			y="475"
			stroke="lightgrey"
			alignment="center"
			fontSize="15"
			
		>
		WS-7
		</SVGText>
		
		<SVGText 
			
			x="200"
			y="475"
			stroke="lightgrey"
			alignment="center"
			fontSize="15"
			
		>
		WS-8
		</SVGText>
		
		<SVGText 
			
			x="200"
			y="350"
			stroke="lightgrey"
			alignment="center"
			fontSize="15"
			
		>
		WS-6
		</SVGText>
		
		<SVGText 
			
			x="200"
			y="225"
			stroke="lightgrey"
			alignment="center"
			fontSize="15"
			
		>
		WS-4
		</SVGText>
		
		<SVGText 
			
			x="200"
			y="100"
			stroke="lightgrey"
			alignment="center"
			fontSize="15"
			
		>
		WS-2
		</SVGText>
		
		<SVGText 
			
			x="15"
			y="350"
			stroke="lightgrey"
			alignment="center"
			fontSize="15"
			
		>
		WS-5
		</SVGText>
		
		<SVGText 
			
			x="15"
			y="225"
			stroke="lightgrey"
			alignment="center"
			fontSize="15"
			
		>
		WS-3
		</SVGText>
		
		<SVGText 
			
			x="15"
			y="100"
			stroke="lightgrey"
			alignment="center"
			fontSize="15"
			
		>
		WS-1
		</SVGText>
		
	</G>


		);
	}

		
}