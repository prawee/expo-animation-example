/*
 * @Author: Prawee Wongsa 
 * @Date: 2019-04-28 13:05:01 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2019-04-28 14:02:29
 */
import React, { Component } from 'react';
import { View, Animated } from 'react-native';

class Ball extends Component {
  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x: 300, y: 500 }
    }).start();
  }

  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>     
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
