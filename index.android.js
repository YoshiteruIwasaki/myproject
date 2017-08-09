/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import PhotoView from 'react-native-photo-view';
import TransformableImage from 'react-native-transformable-image';
//import Zoomable from 'react-native-zoomable';

export default class myproject extends Component {
  render() {
    const { width, height } = Dimensions.get('window');
    return (
      /*
      <Zoomable zoomScale={3} tapToZoomOut="double">
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/yoaicom/resources/master/images/game_of_thrones_1.jpg'
          }}
          style={{ width: 50, height: 50 }}
        />
      </Zoomable>
      */
      /*
      <TransformableImage
        style={{ width: width, height: height }}
        source={{
          uri:
            'https://raw.githubusercontent.com/yoaicom/resources/master/images/game_of_thrones_1.jpg'
        }}
        //pixels={{width: 3607, height: 2400}}
        enableTransform
        enableScale
        enableTranslate
      />
      */
      /*
      <PhotoView
        resizeMode="contain"
        source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
        minimumZoomScale={0.5}
        maximumZoomScale={3}
        androidScaleType="center"
        style={{ width, height }}
      />
      */
      /*
      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageWidth={200}
        imageHeight={200}
      >
        <Image
          style={{ width: 200, height: 200 }}
          source={{
            uri:
              'https://raw.githubusercontent.com/yoaicom/resources/master/images/game_of_thrones_1.jpg'
          }}
        />
      </ImageZoom>
      */
      <Text>Hello world!</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('myproject', () => myproject);
