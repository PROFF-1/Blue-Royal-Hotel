import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const setting=[
  {
    id:'1',
    image: require('../assets/profile2.png'),
    title: 'Account',
    description: 'Manage your account',
    trigger: require('../assets/forward.png')
  },
  {
    id:'2',
    image: require('../assets/security.png'),
    title: 'Security',
    description: 'Enable teo factor authentication',
    trigger: require('../assets/forward.png')
  },
  {
    id:'3',
    image: require('../assets/preference.png'),
    title: 'Preference',
    description: 'Set dark mode',
    trigger: require('../assets/forward.png')
  },
  {
    id:'4',
    image: require('../assets/bookingcolored.png'),
    title: 'Bookings',
    description: 'manage all your bookings',
    trigger: require('../assets/forward.png')
  },
  {
    id:'5',
    image: require('../assets/settings.png'),
    title: 'Settings',
    description: 'Set notifications and refund destination account',
    trigger: require('../assets/forward.png')
  }
]

export default function Account() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
    <View style={styles.container}>
             

      <Image source={require('../assets/profileimage.png')}/>
      <Text style={styles.name}>Amir Jamal</Text>
      <View style={{marginTop: 24, height: 420}}>
        <FlatList
        data={setting}
        renderItem={({item})=>(
          <TouchableOpacity style={styles.holder}>
            <View style={styles.left}>
            <Image source={item.image}/>
            <View style={styles.textHolder}>
              <Text style={{fontSize:13, color: '#043c53'}}>{item.title}</Text>
              <Text style={{fontSize:8, color: '#646464', marginTop: 8}}>{item.description}</Text>
            </View>
            </View>
            <Pressable>
            <Image source={item.trigger}/>
            </Pressable>
          </TouchableOpacity>
        )}
        scrollEnabled={false}
        />
      </View>
              <Text style={{fontSize:16, color: '#043c53', fontWeight: 700}}>Logout</Text>

    </View>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    paddingHorizontal: 16,
    paddingTop: 76
  },

  name:{
    marginTop: 15,
    fontSize: 15,
    fontWeight: 600,
    color: '#353840'
  },
  holder:{
    flexDirection: 'row',
    justifyContent:'space-between',
    width: '100%',
    alignItems:'center',
    borderWidth: 1,
    borderColor:'#F2F2F2',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 4,
    marginBottom: 18
  },

  left:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  textHolder:{
    marginLeft: 17,
  }
})