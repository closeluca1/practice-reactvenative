import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Shoes from '../Shoes';

export default function Footer() {
 return (
   <View>

    <Text style={ styles.title }>Você também pode gostar</Text>
    
    <View style={{ flexDirection: 'row' }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={ false }>
        
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={ require('../../assets/5.png') } cost="42,24" title="Nike Promo Sync"/>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <Shoes style={{ marginHorizontal: 10 }} img={ require('../../assets/6.png') } cost="723,90" title="Nike Jhordan"/>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <Shoes style={{ marginHorizontal: 10 }} img={ require('../../assets/3.png') } cost="111,90" title="Nike Snack"/>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <Shoes style={{ marginHorizontal: 10 }} img={ require('../../assets/4.png') } cost="93,90" title="Nike Simple"/>
          </View>
          
          
          

          
        
          
        
        
      </ScrollView>
    </View>

   </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'Montserrat_400Regular',
    marginVertical: '2%',
    paddingHorizontal: '2%',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
})