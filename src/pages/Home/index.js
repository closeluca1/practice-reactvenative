import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons' 
import { useNavigation } from '@react-navigation/native';

import Shoes from '../../components/Shoes'

export default function Home() {

  const navigation = useNavigation();

 return (
   <View style={ styles.container }>
     <View style={ styles.header }>
        
        <Image source={ require('../../assets/banner.png') } style={ styles.image }/>

        <View style={ styles.TextContainer }>
          <Text style={ styles.text }>tênis</Text>
          <Text style={ styles.text }>-</Text>
          <Text style={ styles.text }>Masculino</Text>
          <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf:'center' }}>
            <MaterialIcons name="filter-list" size={ 24 } color="#1a1a1a"/>
          </TouchableOpacity>

        </View>

        <View style={ styles.line }/>

     </View>
     
     <ScrollView>

      <Text style={ styles.text }>lançamentos</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around',  marginTop: '2%' }}>

        <Shoes img={ require('../../assets/1.png') } cost="140,90" title="Nike Snap 3" onClick={()=> navigation.navigate('Detail')}/>
        
        <Shoes img={ require('../../assets/2.png') } cost="180,90" title="Nike Super 10"/>

      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: '2%' }}>

        <Shoes img={ require('../../assets/3.png') } cost="111,90" title="Nike Snack"/>
        
        <Shoes img={ require('../../assets/4.png') } cost="93,90" title="Nike Simple"/>

      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: '2%' }}>

        <Shoes img={ require('../../assets/5.png') } cost="42,24" title="Nike Promo Sync"/>
        
        <Shoes img={ require('../../assets/6.png') } cost="723,90" title="Nike Jhordan"/>

      </View>

      </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fafafa',
  },
  line: {
    flex: 1,
    backgrounColor: 'pink'
  }, 
  header: {
    marginTop: 10
  },
  image: {
    width: '100%'
  },
  text: {
    textTransform: 'uppercase',
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'Montserrat_400Regular',
    marginHorizontal: '1%',
    color: '#1a1a1a',
  },
  TextContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%',
  },
  line: {
    borderBottomColor: '#c7c7c7',
    borderBottomWidth: 2,
  }
});