import { SafeAreaView, StyleSheet, Text, View, Platform} from 'react-native'
import React from 'react'
import Header from '../Components/Header'

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Text>Home</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: Platform.OS === 'android' ? 50 : 0,
    backgroundColor:'#fff',
    paddingHorizontal: 16,

  }
})