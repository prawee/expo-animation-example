import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import Ball from './src/Ball';
import Deck from './src/Deck';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Deck />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
