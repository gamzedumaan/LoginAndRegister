import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export type Buttons = {
  text: string;
  onSelect: () => void;
};
export default function Button({text, onSelect}: Buttons) {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onSelect}>
        <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '40%',
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: '30%',
    marginTop: 20,
  },
});
