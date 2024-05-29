import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
const App = () => {
  return (

  <View style={{ flex:1}}>
   
   <View style={{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
   }}>

    <View style={{
       background:'red', width:150, height:100,
       justifyContent: 'center',
       borderRadius: 10,
      
       
   }}>
    <Text style={{
      fontSize: 20, color: 'white',
      textAlign: 'center',
      fontWeight: 'bold'
    }}>
      Login
    </Text>
    
   </View>  
   <View style={{
       background:'red', width:150, height:100,
       justifyContent: 'center',
       borderRadius: 10,
      
       
   }}>
    <Text style={{
      fontSize: 20, color: 'white',
      textAlign: 'center',
      fontWeight: 'bold'
    }}>
      Login
    </Text>
   </View>
   </View>
   </View>
   
   
   
  
  )
}
export default App