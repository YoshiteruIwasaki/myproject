import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Dimensions } from 'react-native';

import ImageZoom from 'react-native-image-pan-zoom';
import PhotoView from 'react-native-photo-view';
import TransformableImage from 'react-native-transformable-image';

class FirstTabScreen extends Component {
  render() {
    const { width, height } = Dimensions.get('window');
    return (
      <PhotoView
        resizeMode="contain"
        source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
        minimumZoomScale={0.5}
        maximumZoomScale={3}
        androidScaleType="center"
        style={{ width, height }}
      />
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

export default FirstTabScreen;
