/*
 * @Author: Prawee Wongsa 
 * @Date: 2019-04-28 13:05:01 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2019-04-28 13:07:46
 */
import React, { Component } from 'react';
import { View } from 'react-native';

class Ball extends Component {
  render() {
    return (
      <View style={styles.ball}></View>
    );
  }  
}

const styles = {
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black'
  }
}

export default Ball;
