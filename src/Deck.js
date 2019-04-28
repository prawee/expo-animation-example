/*
 * @Author: Prawee Wongsa 
 * @Date: 2019-04-28 15:20:45 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2019-04-28 16:36:03
 */
import React, { Component } from 'react';
import { View, Animated } from 'react-native';

class Deck extends Component {
  renderCards() {
    return this.props.data.map(item => {
      return this.props.renderCard(item);
    });
  }
  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    );
  }
}

export default Deck;
