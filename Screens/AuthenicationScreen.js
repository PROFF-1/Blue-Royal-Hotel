import { StyleSheet, Text, View,SafeAreaView, Image, TextInput, Animated, Pressable, TouchableOpacity } from 'react-native'
import React,{useRef, useState} from 'react'
import Buttons from '../Components/Buttons';

export default function AuthenicationScreen({navigation}) {

  const [signIn, setSignIn]= useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current;

  const toggelForm = ()=>{
    Animated.timing(slideAnim,{
      toValue: signIn? -400: 0,
      duration: 300,
      useNativeDriver:true
    }).start()
    setSignIn(!signIn);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/logo2.png')}
      
      tintColor={'#7c6a46'}
      style={{position:'absolute', top:137, left:156}}
      />
      <Animated.View style={[styles.inputView, {transform:[{translateX: slideAnim}]}]}>
        <View >
          <View>
            <Text>Email</Text>
            <View style={styles.placeholder}>
              <Image source={require('../assets/email.png')}
              style={{marginRight: 15}}/>
              <TextInput
              placeholder=''
              style={{flex:1}}
              />
            </View>
          </View>
          <View>
            <Text>Password</Text>
            <View style={styles.placeholder}>
              <Image source={require('../assets/password.png')}
              style={{marginRight: 15}}/>
              <TextInput
              placeholder=''
              style={{flex:1}}
              />
            </View>
          </View>
        </View>
         <Pressable style={{ marginTop: 23, alignItems: 'flex-end'}} >
          <Text style={{color:'red', marginBottom: 18}}>Forgot password</Text>
        </Pressable>
        <Buttons title='Sign In' onPress={()=>navigation.navigate('AppTabs')}/>
        <Pressable style={{ marginTop: 23, alignItems: 'flex-end'}} >
          <Text onPress={toggelForm} style={styles.register}>Register now</Text>
        </Pressable>
      </Animated.View>

      <Animated.View style={[styles.inputView, {transform:[{translateX: Animated.add(slideAnim, 400)}]}]}>
        <View >
          <View>
            <Text>Name</Text>
            <View style={styles.placeholder}>
              <Image source={require('../assets/name.png')}
              style={{marginRight: 15}}/>
              <TextInput
              placeholder=''
              style={{flex:1}}
              />
            </View>
          </View>
          <View>
            <Text>Email</Text>
            <View style={styles.placeholder}>
              <Image source={require('../assets/email.png')}
              style={{marginRight: 15}}/>
              <TextInput
              placeholder=''
              style={{flex:1}}
              />
            </View>
          </View>
          <View>
            <Text>Phone</Text>
            <View style={styles.placeholder}>
              <Image source={require('../assets/phone.png')}
              style={{marginRight: 15}}/>
              <TextInput
              placeholder=''
              style={{flex:1}}
              />
            </View>
          </View>
          <View>
            <Text>Password</Text>
            <View style={styles.placeholder}>
              <Image source={require('../assets/password.png')}
              style={{marginRight: 15}}/>
              <TextInput
              placeholder=''
              style={{flex:1}}
              />
            </View>
          </View>
        </View>
         <Buttons title='Sign up' onPress={()=>navigation.navigate('AppTabs')}/>
        <Pressable style={{ marginTop: 23, alignItems: 'flex-end'}} >
          <Text onPress={toggelForm} style={styles.register}>Sign In</Text>
        </Pressable>
      </Animated.View>


      <Text style={styles.OR}>OR</Text>

      <View style={styles.signUpOptions}>
        <TouchableOpacity style={styles.options}>
                <Image source={require('../assets/applelogo.png')} style={{marginRight: 15}}/>
                <Text style={styles.text}>Continue with apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options}>
                <Image source={require('../assets/googlelogo.png')} style={{marginRight: 15}}/>
                <Text style={styles.text}>Continue with google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:16,
    justifyContent:'center'
  },
  placeholder:{
    borderBottomColor:'#d9d9d9',
    borderBottomWidth: 2,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom: 15
  },
  inputView:{
    position:'absolute',
    left:16,
    right:16,
    top: 242
  },

  register:{
    fontSize:15, 
    color: '#7c6a46',
    fontWeight: 700
  },

  OR:{
    fontSize:15, 
    color: '#7c6a46',
    fontWeight: 600,
    position:'absolute',
    bottom:253,
    left: 184
  },

  signUpOptions:{
    position:'absolute',
    bottom:90,
    left: 16,
    right: 16,
    alignItems:'center',
   
   
  },

  options:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    paddingVertical: 17,
    marginTop: 19,
    borderWidth: 1,
    borderColor:'#d9d9d9',
    paddingLeft: 19
  },
  text: {
    marginLeft: 70
  }

  
})