import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Booking() {


  const booked =[{
    id:'1',
    name: 'The Royal Room',
    price: 'N190,000',
    facility1: require('../assets/tele.png'),
    facility2: require('../assets/bath.png'),
    facility3: require('../assets/network.png'),
    duration: '27 Mar. to 29 Mar',
    rating: require('../assets/RATING.png'),
    image: require('../assets/room3.png')
  },{
    id:'2',
    name: 'Standard Room',
    price: 'N120,000',
    facility1: require('../assets/tele.png'),
    facility2: require('../assets/bath.png'),
    facility3: require('../assets/network.png'),
    duration: '27 Mar. to 29 Mar',
    rating: require('../assets/RATING.png'),
    image: require('../assets/room1.png')
  },{
    id:'3',
    name: 'Executive Room',
    price: 'N120,000',
    facility1: require('../assets/tele.png'),
    facility2: require('../assets/bath.png'),
    facility3: require('../assets/network.png'),
    duration: '27 Mar. to 29 Mar',
    rating: require('../assets/RATING.png'),
    image: require('../assets/room4.png')
  },{
    id:'4',
    name: 'Deluxe Room',
    price: 'N120,000',
    facility1: require('../assets/tele.png'),
    facility2: require('../assets/bath.png'),
    facility3: require('../assets/network.png'),
    duration: '27 Mar. to 29 Mar',
    rating: require('../assets/RATING.png'),
    image: require('../assets/room5.png')
  },
  {
    id:'5',
    name: 'Suit',
    price: 'N120,000',
    facility1: require('../assets/tele.png'),
    facility2: require('../assets/bath.png'),
    facility3: require('../assets/network.png'),
    duration: '27 Mar. to 29 Mar',
    rating: require('../assets/RATING.png'),
    image: require('../assets/room6.png')
  }
]

  const renderItem =({item})=>(
    <View style={{flexDirection: 'row', alignItems:'center', width:'100%', height: 100, marginBottom: 9, }}>
      <Image source={item.image}  style={{height: 90, width: 90}}/>
      <View style={{ width: '70%', paddingLeft: 15,paddingRight: 10 , justifyContent: 'space-between', height: 90, paddingVertical: 9, backgroundColor: 'rgba(0,0,0, 0.02)'}}>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
            <Text style={{fontSize: 18, fontWeight: 500, color:'#353840'}}>{item.name}</Text>
            <Image source={item.rating}/>
          </View>
          <Text style={{fontSize: 12, fontWeight: 500, color:'#353840'}}>{item.price}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '40%'}}>
            <View style={{height: 20, width: 20, borderRadius: '50%', backgroundColor:'white', alignItems: 'center', justifyContent: 'center'}}>
               <Image source={item.facility1} style={{height: 12, width: 10}}/>
            </View>
            <View style={{height: 20, width: 20, borderRadius: '50%', backgroundColor:'white', alignItems: 'center', justifyContent: 'center'}}>
               <Image source={item.facility2} style={{height: 12, width: 10}}/>
            </View>
            <View style={{height: 20, width: 20, borderRadius: '50%', backgroundColor:'white', alignItems: 'center', justifyContent: 'center'}}>
               <Image source={item.facility3} style={{height: 12, width: 10}}/>
            </View>
          </View>
          <Text style={{fontSize: 8, fontWeight: 500, color:'#353840'}}>{item.duration}</Text>
        </View>
      </View>

    </View>
  )
  return (
    <View>
      <FlatList
       data={booked}
       renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({})