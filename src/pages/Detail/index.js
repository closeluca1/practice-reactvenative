import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Dot from '../../components/Dot';
import Sizes from '../../components/Sizes';
import BuyButton from '../../components/Buybutton';
import Footer from '../../components/Footer';

export default function Detail({ navigation }) {
  
  navigation.setOptions({
    headerTitle: 'Nike Snap 3'
  })
 
  return (
   <ScrollView style={ styles.container }>
   
    <Image style={ styles.image } resizeMode="cover" source={ require('../../assets/detail.png') }/>
    
    <View>
      
      <View>
        <Text style={ styles.price }>R$ 140,90</Text>
      </View>
      <View>
        <Text style={ styles.title }>Nike Snap 3</Text>
      </View>

      <View style={ styles.dotContainer }>
        <Dot color="#2379f4"/>
        <Dot color="#fb6e53"/>
        <Dot color="#000"/>
        <Dot color="#c7c7c7"/>
      </View>

      <View style={ styles.swipe }>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          
        <Sizes bgColor="#17181a" color="#fff">40</Sizes>
        <Sizes>37</Sizes>
        <Sizes>37</Sizes>
        <Sizes>42</Sizes>

        </ScrollView>
      </View>

      <View style={ styles.textContent }>
        
        <Text style={ styles.subtitle }>Nike Snap 3</Text>
        
        <Text style={ styles.textContent }>
          Para caminhadas ou corridas leves ou uso diário, aposte no conforto e qualidade do Tênis Olympikus para completar seu look esportivo. Produzido com material macio, o modelo conta com tecnologia na entressola que proporciona alto nível de maciez e uma passada mais suave. O solado de borracha garante ótima aderência e tração em diferentes tipos de piso. Já seu visual clean oferece versatilidade para você combinar com legging e blusinha. Aproveite! 
        </Text>
        
        <Text style={ styles.list }>Categotria: Amortecimento</Text>

        <Text style={ styles.list }>Material: Mesh</Text>

        <BuyButton/>
      </View>

      <View style={ styles.line }/>

      <Footer/>

    </View>
   
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff'
  
  },
  image: {
    width: '100%'
  },
  price: {
    fontSize: 24,
    color: '#c7c7c7',
    paddingHorizontal: '2%'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Montserrat_400Regular',
    textTransform: 'uppercase',
    paddingHorizontal: '2%'
  },
  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%'
  }, 
  swipe: {
    width: '100%',
    flexDirection: 'row'
  },
  textContent: {
    fontSize: 15,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%',
  },
  subtitle: {
    fontSize: 22,
    lineHeight: 30,
    marginVertical: '2%',
    paddingHorizontal: '2%',
  },
  list: {
    fontSize: 16,
    marginVertical: '2%',
    marginHorizontal: '2%'
  },
  line: {
    borderWidth: 1,
    borderBottomColor: '#c7c7c7',
    marginVertical: '2%'
  }
})