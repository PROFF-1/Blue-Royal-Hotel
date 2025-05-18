import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Buttons({title, onPress}) {
  return (
   <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.text}>{title}</Text>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
container:{
  backgroundColor:'black',
  alignItems:'center',
  justifyContent:'center',
  paddingVertical: 18

},

text:{
  color:'#fff',
  fontSize:17,
  fontWeight:500
}

})