import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const details =[
  {
    id: '1',
    name: 'The Royal Room',
    rating: require('../assets/RATING.png'),
    price: '₦190,00',
    facility1: require('../assets/television.png'),
    facility2: require('../assets/shower.png'),
    facility3: require('../assets/wi-fi.png'),
    like: require('../assets/heart.png'),
    room: require('../assets/room1.png'),
    status: 'Available'
  },
  {
    id: '2',
    name: 'The Royal Room',
    rating: require('../assets/RATING.png'),
    price: '₦170,00',
    facility1: require('../assets/television.png'),
    facility2: require('../assets/shower.png'),
    facility3: require('../assets/wi-fi.png'),
    like: require('../assets/heart.png'),
    room: require('../assets/room2.png'),
    status: 'Available'
  },
  {
    id: '3',
    name: 'The Royal Room',
    rating: require('../assets/RATING.png'),
    price: '₦90,00',
    facility1: require('../assets/television.png'),
    facility2: require('../assets/shower.png'),
    facility3: require('../assets/wi-fi.png'),
    like: require('../assets/heart.png'),
    room: require('../assets/room1.png'),
    status: 'Available'
  }
]

export default function Rooms() {

  const renderItem =({item})=>(
    <TouchableOpacity style={{marginRight: 12, borderRadius: 5}}>
      <Image source={item.room} style={{ borderRadius: 5}}/>
      <View style={styles.detailContainer}>
        <View style={styles.nameAndRating}>
          <Text style={styles.name}>{item.name}</Text>
          <Image source={item.rating}/>
        </View>
        <Text style={styles.price}>
          {item.price}
        </Text>
        <View style={styles.facilitiesAndStaus}>
          <View style={styles.facilitiesAndStausLeft}>
            <Image source={item.facility1} />
            <Image source={item.facility2} style={{marginLeft: -50}}/>
            <Image source={item.facility3} style={{marginLeft: -50}}/>
          </View>
          <View>
            <Text style={styles.status}>
              {item.status}
            </Text>
          </View>
        </View>
      </View>
      <Image source={item.like} style ={{position:'absolute',top: 8, left:196}}/>
    </TouchableOpacity>
  )
  return (
    <View>
      <FlatList
      data={details}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item)=>item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  detailContainer:{
    backgroundColor:'rgba(0,0,0,0.4)',
    position:'absolute',
    bottom: 0,
    height: 100,
    width: 235,
    paddingTop: 6
  },

  nameAndRating:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 4.74
  },
  price: {
    marginLeft: 12,
    color: 'white',
    fontSize:15,
    fontWeight: 500
  },
  name:{
    color: 'white',
    fontSize:18,
    fontWeight: 600
  },

  facilitiesAndStaus:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop: 15,
    paddingRight: 4.74
  },

  facilitiesAndStausLeft:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'red',
    height: 0,
    marginLeft: -15
  },

  status:{
    color: 'white'
  }
})