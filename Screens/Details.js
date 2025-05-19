import { Image, StyleSheet, Text, View,FlatList, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Buttons from '../Components/Buttons'
import Amenities from '../Components/Amenities'
const images=[require('../assets/spec1.png'), require('../assets/spec2.png'), require('../assets/spec1.png')]

export default function Details({navigation,route}) {

  const {name, price, rating, facility1, facility2, facility3, status,like,image}= route.params
  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Image source={image} style={{width:'100%', height:'100%'}}/>
        <View style={styles.layer}>
          <View style={styles.layerTop}>
            <Pressable  onPress={()=>navigation.goBack('Home')}>
              <Image source={require('../assets/back.png')}/>
            </Pressable>
            <Image source={require('../assets/heart.png')}/>
          </View>
          <View>
            <View  style={{paddingLeft: 12,}}>
              <View style={styles.nameAndRating}>
              <Text style={styles.name}>The Royal Room</Text>
              <Image source={require('../assets/RATING.png')}/>
              </View>
              
              <View style={styles.priceAndStatus}>
              <Text style={styles.price}>N190,000</Text>
              <Text style={styles.status}>Available</Text>
              </View>
              <View style={styles.amenities}>
                <Amenities/>
              </View>
              
            </View>
          </View>
        </View>
        
      </View>
      <View style={{paddingHorizontal:16}}>
      <Text style={styles.roomSpec}>Room Specifications</Text>
      <Text style={styles.description}>The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.</Text>
    <View>

      <FlatList
        data={images}
        renderItem={({item})=>(
          <View>
            <Image source={item} style={{marginRight: 16, marginTop: 26, marginBottom: 33}}/>
          </View>
        )}
        horizontal
      />
    </View>
    <Buttons title={'Book room'} style={{backgroundColor:'blue'}}/>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    height: 420,
    width:'100%',
    backgroundColor:'plum', 
    marginBottom: 26,
  },
  layer:{
    height:420,
    width: '100%',
    backgroundColor:'rgba(0,0,0,0.5)',
    position:'absolute',
    justifyContent:'space-between',
    paddingHorizontal:16,
    paddingTop:27
  },
   layerTop:{
    flexDirection :'row',
    justifyContent:'space-between',
    
  },
  images:{
    flexDirection:'row',
    backgroundColor:'plum',
    height: 40,
    marginBottom: 20
  },
  roomSpec:{
    fontSize:16,
    fontWeight:700,
    color: '#353840'
  },
  description:{
    fontSize: 13,
    fontWeight: 400,
    opacity: 0.6,
    marginTop: 10
  },
   price: {
    marginLeft: 12,
    color: 'white',
    fontSize:15,
    fontWeight: 500
  },
  name:{
    color: 'white',
    fontSize:20,
    fontWeight: 600
  },
  status:{
    color: 'white',
    fontWeight: 600
  },
  nameAndRating:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    paddingRight: 4.74,
  },
  priceAndStatus:{
    flexDirection : 'row',
    justifyContent:'space-between',
    marginTop: 5,
    marginHorizontal: -5
  },
   amenities:{
    flexDirection:'row',
    marginTop: 20,
    marginBottom: 10
  }
})