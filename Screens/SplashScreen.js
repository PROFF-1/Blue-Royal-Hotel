import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function SplashScreen({navigation}) {

  const [showLogo, setShowLogo] = useState(false)
  const [showLogo2, setShowLogo2]=useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 3000);
    const timer2 = setTimeout(() => {
      setShowLogo2(true);
      setShowLogo(false);
    }, 6000); 
    const timer3 = setTimeout(() => {
      navigation.replace('AuthenicationScreen');
    }, 9000);
    

    return () => {
      clearTimeout(timer)
      clearTimeout(timer2)
      clearTimeout(timer3)
    
    };
  
  }, []);
  return (
    <View style={styles.container}>
      {
        !showLogo && !showLogo2?(
          <View style={styles.inner}>
            <Image source={require('../assets/Logo1.png')}/>
            <Text style={styles.text}>Where luxury meets comfort</Text>
          </View>
        ):(   
        showLogo?(
          <View style={styles.inner}>
            <Image source={require('../assets/logo2.png')}/>
            <Text style={styles.text}>Blue Royal Hotel</Text>
          </View>
        ):(
          <View style={styles.inner}>
            <Text style={styles.text}>Blue Royal</Text>
          </View>
        )
        )
      }
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14274A',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inner:{
    alignItems:'center',
    
  },


  text:{
    color:'#fff',
    fontSize:15,
    fontWeight:500,
    marginTop:8,
    letterSpacing:1,
    fontFamily:'raleway'
  }
})