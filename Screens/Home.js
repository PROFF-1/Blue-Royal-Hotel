import { SafeAreaView, StyleSheet, Text, View, Platform,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import SearchBar from '../Components/SearchBar'
import Filters from '../Components/Filters'
import Rooms from '../Components/Rooms'

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <SearchBar/>
      <View style={{marginTop:23}}>
        <Image source={require('../assets/headerimage.png')}
        style={{width: 385, borderRadius: 5}}/>
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
      <Rooms/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: Platform.OS === 'android' ? 50 : 0,
    backgroundColor:'#fff',
    paddingHorizontal: 16,

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
    marginLeft: 118,
    marginTop: 18
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