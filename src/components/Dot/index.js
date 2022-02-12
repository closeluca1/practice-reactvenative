import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function Dot(props) {
 return (
   <View style={[ styles.container, { backgroundColor: props.color }]}/>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * .05,
    height: Dimensions.get('window').width * .05,
    borderRadius: Dimensions.get('window').width * .05 / 2,
    marginHorizontal: '2.5%',
    elevation: 5,
  }
});
