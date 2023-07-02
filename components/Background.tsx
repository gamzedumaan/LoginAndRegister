import {StyleSheet, View, ImageBackground} from 'react-native';
import React from 'react';

export type Image = {
  children: string;
};

export default function Background({children}: Image) {
  return (
    <View>
      <ImageBackground
        style={{height: '100%'}}
        source={require('./../assets/image/background.png')}>
        <View style={{position: 'absolute'}}>{children}</View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({});
