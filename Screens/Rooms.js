import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../Components/SearchBar'
import Filters from '../Components/Filters'
import Room from '../Components/Room'
import { ScrollView } from 'react-native-gesture-handler'

export default function Rooms() {
  return (
    <SafeAreaView style={styles.container}>
      
        <Header/>
        <SearchBar/>
        <Filters/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Room/>
          <View style={{height: 20}}></View>
          <Room/>
          <View style={{height: 20}}></View>
          <Room/>
      </ScrollView>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    paddingHorizontal:16,  
    marginBottom: 50 

  }
})