/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
 
} from 'react-native';

import WorkStations from './components/workstations'

export default class WhoisWhere extends Component {
  render() {
    return (
	
      		<WorkStations/>
		
    );
  }
}



AppRegistry.registerComponent('ReactMobile', () => WhoisWhere);
