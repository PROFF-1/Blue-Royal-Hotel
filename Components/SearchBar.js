import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function SearchBar() {
  return (
    <View style={styles.container}>
     <Image source={require('../assets/search.png')}/>
     <TextInput
        placeholder='Search for our nearby hotels'
        placeholderTextColor={'#A0A3BD'}
        style={{
          backgroundColor:'#FAFAFA',
          width:'80%',
          height:45,
          marginTop:10,
          marginBottom:10
        }}/>
        <Image source={require('../assets/Rectangle.png')}/>
        <Image source={require('../assets/dropdown.png')}
        style={{marginRight: 15}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#fafafa',
    height:45,
    width:'100%',
    padding:10,
    marginTop:10,
  },
})