import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/hamburgermenu.png')}/>
      <View style={styles.middle}>
        <Image source={require('../assets/location.png')}/>
        <Text style={{ marginLeft: 10}}>Abuja, Nigeria</Text>
      </View>
      <View style={styles.right}>
        <Image source={require('../assets/theme.png')}/>
        <Image source={require('../assets/profile.png')}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#fff',
    height:60,
    width:'100%',
  },

  middle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#fff',
    padding:5,
    marginLeft: 50,
  
  },
  right:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#fff',
    padding:5,
    width:80
  }
 
})