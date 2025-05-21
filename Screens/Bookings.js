{/*import { SafeAreaView, StyleSheet, Text, View, Animated} from 'react-native'
import React, {useState, useRef} from 'react'
import Header from '../Components/Header'
import SwitchSelector from "react-native-switch-selector";
import Booking from '../Components/Booking';


export default function Bookings() {
  const [State, setState]= useState('Active')
  const slideAnim = useRef(new Animated.Value(0)).current;
  

   const toggelView = ()=>{
      Animated.timing(slideAnim,{
        toValue: State? -400: 0,
        duration: 300,
        useNativeDriver:true
      }).start()
      setState('Past');
    }
 
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
    <View style={styles.container}>
      <Header/>
      <SwitchSelector
        initial={0}
        onPress={value => setState(value)}
        textColor={'black'} //'#7a44cf'
        selectedColor={'white'}
        buttonColor={'#14274A'}
        borderRadius={2}
        options={[
          { label: "Active"}, //images.feminino = require('./path_to/assets/img/feminino.png')
          { label: "Past"} //images.masculino = require('./path_to/assets/img/masculino.png')
        ]}
      />
      <Animated.View style={{transform:[{translateX: slideAnim}],paddingTop: 20}}>
         <Booking/>
      </Animated.View>
     
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal: 16,
    backgroundColor:'#fff'
  
  }
  
})*/}

{/*import { SafeAreaView, StyleSheet, View, Animated, Dimensions, FlatList, Image} from 'react-native'
import React, { useState, useRef } from 'react'
import Header from '../Components/Header'
import SwitchSelector from "react-native-switch-selector";
import Booking from '../Components/Booking';

const SCREEN_WIDTH = Dimensions.get('window').width;

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
  }
]

export default function Bookings() {
  const [selected, setSelected] = useState('Active');
  const slideAnim = useRef(new Animated.Value(0)).current;

  const handleSwitch = (value) => {
    setSelected(value);
    Animated.timing(slideAnim, {
      toValue: value === 'Active' ? 0 : -SCREEN_WIDTH,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
      <View style={styles.container}>
        <Header/>
        <SwitchSelector
          initial={0}
          onPress={handleSwitch}
          textColor={'black'}
          selectedColor={'white'}
          buttonColor={'#14274A'}
          borderRadius={2}
          options={[
            { label: "Active", value: "Active" },
            { label: "Past", value: "Past" }
          ]}
        />
        <View style={{overflow: 'hidden', flex: 1, paddingTop: 20}}>
          <Animated.View
            style={{
              flexDirection: 'row',
              width: SCREEN_WIDTH * 2,
              transform: [{ translateX: slideAnim }],
            }}
          >
            <View style={{width: SCREEN_WIDTH}}>
              <Booking type="active" />
            </View>
            <View style={{width: SCREEN_WIDTH}}>
              <FlatList
                     data={booked}
                     renderItem={({item})=>(
                         <View style={{flexDirection: 'row', alignItems:'center', width:'100%', height: 100, marginBottom: 9}}>
                           <Image source={item.image}  style={{height: 90, width: 90}}/>
                           <View style={{ width: '70%', marginLeft: 23,paddingRight: 16 , justifyContent: 'space-between', height: 100, paddingVertical: 9}}>
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
                       )}
                       type ='Past'
                    />
            </View>
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal: 16,
    backgroundColor:'#fff'
  }
})*/}

import { SafeAreaView, StyleSheet, Text, View, Animated, Dimensions, FlatList, Image, TouchableOpacity, Platform } from 'react-native'
import React, { useState, useRef } from 'react'
import Header from '../Components/Header'
import Booking from '../Components/Booking'

const SCREEN_WIDTH = Dimensions.get('window').width;

const booked = [{
  id: '1',
  name: 'The Royal Room',
  price: 'N190,000',
  facility1: require('../assets/tele.png'),
  facility2: require('../assets/bath.png'),
  facility3: require('../assets/network.png'),
  duration: '27 Mar. to 29 Mar',
  rating: require('../assets/RATING.png'),
  image: require('../assets/room3.png')
}];

export default function Bookings() {
  const [selected, setSelected] = useState('Active');
  const slideAnim = useRef(new Animated.Value(0)).current;

  const handleSwitch = (value) => {
    setSelected(value);
    Animated.timing(slideAnim, {
      toValue: value === 'Active' ? 0 : -SCREEN_WIDTH,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <Header />

        {/* Custom Tab Switcher */}
        <View style={styles.tabContainer}>
          {['Active', 'Past'].map(tab => (
            <TouchableOpacity
              key={tab}
              onPress={() => handleSwitch(tab)}
              style={[styles.tabButton, selected === tab && styles.activeTab]}
            >
              <Text style={[styles.tabText, selected === tab && styles.activeTabText]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ overflow: 'hidden', flex: 1, paddingTop: 20 }}>
          <Animated.View
            style={{
              flexDirection: 'row',
              width: SCREEN_WIDTH * 2,
              transform: [{ translateX: slideAnim }],
            }}
          >
            <View style={{ width: SCREEN_WIDTH }}>
              <FlatList
                data={booked}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: 100, marginBottom: 9 }}>
                    <Image source={item.image} style={{ height: 90, width: 90 }} />
                    <View style={{ width: '70%', paddingLeft: 15,paddingRight: 10 , justifyContent: 'space-between', height: 90, paddingVertical: 9, backgroundColor: 'rgba(0,0,0, 0.02)'}}>
                      <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Text style={{ fontSize: 18, fontWeight: '500', color: '#353840' }}>{item.name}</Text>
                          <Image source={item.rating} />
                        </View>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: '#353840' }}>{item.price}</Text>
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '40%' }}>
                          {[item.facility1, item.facility2, item.facility3].map((icon, index) => (
                            <View key={index} style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                              <Image source={icon} style={{ height: 12, width: 10 }} />
                            </View>
                          ))}
                        </View>
                        <Text style={{ fontSize: 8, fontWeight: '500', color: '#353840' }}>{item.duration}</Text>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
            <View style={{ width: SCREEN_WIDTH }}>
               <Booking type="active" />
            </View>
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android'? 46: 0
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
    borderRadius: 4,
    marginTop: 12,
    marginBottom: 12,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 4,
  },
  tabText: {
    color: '#333',
    fontWeight: '500'
  },
  activeTab: {
    backgroundColor: '#14274A'
  },
  activeTabText: {
    color: 'white'
  }
});
