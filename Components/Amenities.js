import { StyleSheet, Text, View,Image, FlatList } from 'react-native'
import React from 'react'

const amenties =[
  {
    name: '42"television',
    image: require('../assets/tele.png')
  },{
    name: '42"television',
    image: require('../assets/bath.png')
  },{
    name: '24H stable wi-fi',
    image: require('../assets/network.png')
  },{
    name: 'Free Breakfast',
    image: require('../assets/dinner.png')
  }
]

export default function Amenities() {
  return (
    <View>
      < FlatList
        data={amenties}
        renderItem={({item})=>(
          <View style={styles.each}>
            <View style={styles.imageBackground}>
              <Image source={item.image}/>
            </View>
            <Text style={{color:'white', fontSize:8}}>{item.name}</Text>
          </View>
        )}
        horizontal
      />    
    </View>
  )
}

const styles = StyleSheet.create({
each:{
  alignItems:'center',
  height:57,
  marginRight: 48
},
imageBackground:{
    backgroundColor:'white',
    height:40,
    width: 40,
    borderRadius: '50%',
    alignItems:'center',
    justifyContent: 'center'
}
 
})