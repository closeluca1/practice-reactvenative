import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Sizes(props) {
 return (
    <View style={[ styles.container, { backgroundColor: props.bgColor || '#fafafa'} ]}>
      
      <Text style={[ styles.size, { color: props.color || '#1a1a1a'} ]}> {props.children} </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderColor: '#c7c7c7c7',
    borderWidth: 3,
    marginHorizontal: 10
  },
  size: {
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#fafafa'
  }
});