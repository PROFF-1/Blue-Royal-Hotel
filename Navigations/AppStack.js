import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../Screens/SplashScreen';
import AuthenicationScreen from '../Screens/AuthenicationScreen';
import AppTabs from './AppTabs';
import Home from '../Screens/Home';
import Details from '../Screens/Details';


const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AppTabs">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AuthenicationScreen" component={AuthenicationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='AppTabs' component={AppTabs} options={{headerShown:false}}/>
        <Stack.Screen name='Details' component={Details} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

