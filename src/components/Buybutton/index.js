import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Buybutton() {
 return (
   <View style={ styles.container }>
     <TouchableOpacity style={ styles.btnContainer }>
       <Text style={ styles.title }>Comprar</Text>
     </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    width: '95%',
    height: 40,
    borderRadius: 5,
    marginVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a'
  },
  title: {
    fontSize: 18,
    color: '#fafafa'
  }
  
})