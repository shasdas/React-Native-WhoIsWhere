import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions
} from 'react-native';
import Svg,{
    Circle,
    G,
    Line,
	Rect,
	Text as SVGText
} from 'react-native-svg';
import TimerMixin from 'react-timer-mixin';
import * as scale from 'd3-scale';


import Canvas from './canvas';
import ds from '../datasource/data';

const { height, width } = Dimensions.get('window');
const d3 = {scale};

 let  xScale = d3.scale.scaleLinear()
		.domain([0, 100])
		.range([0,width-40]);
	
 let	yScale = d3.scale.scaleLinear()
		.domain([0, 100])
		.range([500,0]);


export default class WorkStations extends Component
{
	constructor(props)
	{
		super(props);
		this.changestate= this.changestate.bind(this);
		
		setInterval(this.changestate, 2000);
	}
	

	
	mixins = [TimerMixin];
	
	state = {
		data: [],
		ds,
		height,
		width
	};
	
	changestate()
	{
	this.setState( {
					data: this.getRandomArrayElements(this.state.ds, 8),
					ds
				   }) ;
		
	}
	
	getRandomArrayElements(arr, count) 
	{
			var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
			while (i-- > min) {
				index = Math.floor((i + 1) * Math.random());
				temp = shuffled[index];
				shuffled[index] = shuffled[i];
				shuffled[i] = temp;
			}
			return shuffled.slice(min);
	}
	
	_onLayout = event => {

     this.setState({
        height:event.nativeEvent.layout.height,
        width:event.nativeEvent.layout.width+40,

      }
    );
	}

	
	render() {
	return(
		
		<ScrollView>
		<View style={styles.container} onLayout={this._onLayout}>
			<Text style={styles.welcome}>
			  WHO IS WHERE? (Mobile Version using React-Native)
			</Text>
			<Svg width={this.state.width} height={505}>
          					
			<Canvas height={height} width={this.state.width}/>
		<G>
		{this.state.data.map((d)=>{

				return(
					<Circle 
					key={d.worker}
					cx={xScale(d.cov)}
					cy={yScale(d.ate)}
					r="5"
					fill="orange"
			/>
				);
			})}

		{this.state.data.map((d)=>{

				return(
					<SVGText 
					key={d.worker+"-label"}
					x={xScale(d.cov + d.label_x)}
					y={yScale(d.ate + d.label_y)}
					stroke="indigo"
					alignment="center"
					fontSize="10"
					>
				{d.worker}
				</SVGText>
				);
			})}
	</G>
			

        </Svg>
			
		</View>	
      	</ScrollView>
	
	);
		

}

componentWillUnmount()
{
	clearInterval(this.changestate);
}
	
	
	
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
	margin:20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 30,
	
  },
  svg: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});