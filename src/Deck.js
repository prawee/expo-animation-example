/*
 * @Author: Prawee Wongsa 
 * @Date: 2019-04-28 15:20:45 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2019-04-28 18:37:41
 */
import React, { Component } from 'react';
import { 
  View,
  Animated,
  PanResponder
} from 'react-native';

class Deck extends Component {
  constructor(props) {
    super(props);

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: () => {},
      onPanResponderRelease: () => {}
    });

    this.state = { panResponder };
  }
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
