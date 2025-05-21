{/*import { SafeAreaView, StyleSheet, Text, View, Platform,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import SearchBar from '../Components/SearchBar'
import Filters from '../Components/Filters'
import Room from '../Components/Room'

export default function Home({navigation}) {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>

        <Header/>
      <SearchBar/>
      <View style={{marginTop:23}}>
        <Image source={require('../assets/headerimage.png')}
        style={{width: '100%', borderRadius: 5}}/>
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
})*/}

import { SafeAreaView, StyleSheet, Text, View, Platform, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import SearchBar from '../Components/SearchBar'
import Filters from '../Components/Filters'
import Room from '../Components/Room'

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function Home({navigation}) {
  return (
    <SafeAreaView style={{flex:1,backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <Header/>
        <SearchBar/>
        <View style={{marginTop:23}}>
          <Image
            source={require('../assets/headerimage.png')}
            style={{width: SCREEN_WIDTH - 32, height: 180, borderRadius: 5, alignSelf: 'center'}}
            resizeMode="cover"
          />
          <View style={[styles.cover, {width: SCREEN_WIDTH - 32, left: 6, top: 15}]}>
            <Text style={styles.text}>A Hotel for every</Text>
            <Text style={styles.text}>moment rich in emotion</Text>
            <TouchableOpacity style={styles.booknow}>
              <Text style={{    textAlign: 'center'}}>Book now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.chooseARoom}>Choose a room</Text>
          <Text style={styles.viewAll}>View all</Text>
        </View>
        <Filters/>
        <View style={{paddingHorizontal: 0}}>
          <Room navigation={navigation}/>
        </View>
      </View>
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
    position:'absolute',
    top: 0,
    // width is set dynamically above
    // left is set dynamically above
  },

  text:{
    color:'#fff',
    fontSize: 16,
    fontWeight: '700'
  },
  booknow:{
    backgroundColor:'#fff',
    paddingHorizontal:15,
    paddingVertical: 8,
    borderRadius:50,
    marginTop:19,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleContainer:{
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'space-between',
    marginTop: 18,
    paddingRight: 16,
    marginLeft: 0
  },

  chooseARoom:{
    color: '#7C6A46',
    fontSize:20,
    fontFamily:'poppins',
    fontWeight:'500',
    marginLeft: 120
  },

  viewAll:{
    fontWeight:'500',
    fontSize: 10,
    color:'#FF4646'
  }
})