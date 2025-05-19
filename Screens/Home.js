import { SafeAreaView, StyleSheet, Text, View, Platform,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import SearchBar from '../Components/SearchBar'
import Filters from '../Components/Filters'
import Room from '../Components/Room'

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: Platform.OS==='ios'? 16: 0}}>
        <Header/>
      </View>
      <View style={{paddingHorizontal: Platform.OS==='ios'? 16: 0}}>
      <SearchBar/>
      </View>
      <View style={{marginTop:23}}>
        <Image source={require('../assets/headerimage.png')}
        style={{width: 385, borderRadius: 5, marginLeft: Platform.OS==='ios'? 15: 0}}/>
        <View style={styles.cover}>
          <Text style={styles.text}>A Hotel for every</Text>
          <Text style={styles.text}>moment rich in emotion</Text>
          <TouchableOpacity style={styles.booknow}>
            <Text>Book now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.titleContainer}>
      <Text style={styles.chooseARoom}>Choose a room</Text>
      <Text style={styles.viewAll}>View all</Text>
      </View>
      <Filters/>
      <View style={{paddingHorizontal: Platform.OS==='ios'? 16: 0}}>
        <Room navigation={navigation}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: Platform.OS === 'android' ? 50 : 0,
    backgroundColor:'#fff',
    paddingHorizontal:Platform.OS==='android'? 16: 16,

  },

  cover:{
    alignItems:'center',
    justifyContent:'center',
    height: 150,
    width: 385,
    position:'absolute'
  },

  text:{
    color:'#fff',
    fontSize: 16,
    fontWeight: 700
  },
  booknow:{
    backgroundColor:'#fff',
    paddingHorizontal:15,
    paddingVertical: 8,
    borderRadius:50,
    marginTop:19

  },

  titleContainer:{
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'space-between',
    marginLeft: Platform.OS==='android'?118: 128,
    marginTop: 18,
    paddingRight: Platform.OS === 'ios'? 16 :0
  },

  chooseARoom:{
    color: '#7C6A46',
    fontSize:20,
    fontFamily:'poppins',
    fontWeight:500
  },

  viewAll:{
    fontWeight:500,
    fontSize: 10,
    color:'#FF4646'
  }
})