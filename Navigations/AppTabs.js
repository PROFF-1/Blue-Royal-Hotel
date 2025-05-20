import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import Bookings from '../Screens/Bookings';
import Rooms from '../Screens/Rooms';
import Account from '../Screens/Account';


const Tab = createBottomTabNavigator()

export default function AppTabs() {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{
      headerShown: false, 
      tabBarShowLabel:false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundColor: '#fafafa',
        borderTopWidth: 0,
        height: 90,
        paddingHorizontal:16
      },
}}>
      <Tab.Screen name='Home' component={Home} options={{
        tabBarIcon: ({ focused}) => (
          <View style={styles.tabContainer}>
            <Image source={require('../assets/home.png')}
            style={{marginBottom: 5}}
            tintColor={ focused ? '#14274A' : '#7c6a46'}
            />
            <Text style={{color: focused ? '#14274A' : '#7c6a46'}}>Home</Text>
          </View>
        ),
      }}/>
      <Tab.Screen name='Bookings' component={Bookings} options={{
        tabBarIcon: ({ focused}) => (
          <View style={styles.tabContainer}>
            <Image source={require('../assets/bookings.png')}
            style={{marginBottom: 5}}
            tintColor={ focused ? '#14274A' : '#7c6a46'}
            />
            <Text style={{color: focused ? '#14274A' : '#7c6a46'}}>Bookings</Text>
          </View>
        ),
      }}/>
      <Tab.Screen name='Rooms' component={Rooms} options={{
        tabBarIcon: ({ focused}) => (
          <View style={styles.tabContainer}>
            <Image source={require('../assets/rooms.png')}
            style={{marginBottom: 5}}
            tintColor={ focused ? '#14274A' : '#7c6a46'}
            />
            <Text style={{color: focused ? '#14274A' : '#7c6a46'}}>Rooms</Text>
          </View>
        ),
      }}/>
      <Tab.Screen name='Account' component={Account} options={{
        tabBarIcon: ({ focused}) => (
          <View style={styles.tabContainer}>
            <Image source={require('../assets/account.png')}
            style={{marginBottom: 5}}
            tintColor={ focused ? '#14274A' : '#7c6a46'}
            />
            <Text style={{color: focused ? '#14274A' : '#7c6a46'}}>Account</Text>
          </View>
        ),
      }}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center', 
    justifyContent: 'center', 
    top: 20,
    width : 60,
  },
})

