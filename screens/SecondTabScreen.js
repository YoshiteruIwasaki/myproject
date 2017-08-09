import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class SecondTabScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Pushed Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  button: {
    marginTop: 16
  }
});

export default SecondTabScreen;
