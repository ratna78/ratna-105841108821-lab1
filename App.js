import React from "react";
import { View, Image, StyleSheet} from 'react-native';
import { Button } from "react-native-web";



const App = () => {
  const ButtonCostum = ({color , text}) => {

  
    return (
     <View style={{
      backgroundColor: color,
      width: 120,
      height: 80,
      borderRadius: 20,
      justifyContent: 'center'
    }}>
        <Text style={{
          textAlign: 'center',
          fontSize: 30,
          color: 'white',
          fontWeight: 'bold'
      }}>{text}
      </Text>
    </View>
  );
};
 return (
  <View style={{ flex: 1}}>
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text style={{
        fontSize: 50,
        fontWeight: 'bold'
      }}>Bulan</Text>
 </View>
 <View style={{
  flex: 1,
  alignItems: 'center',
  justifyContent : 'center'
 }}>
<Image source={require('./bulan.png')} />
</View>

<View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  }}>
    <ButtonCostum color='green' text='Login'/>
    <ButtonCostum color='green' text='SignUp'/>

  </View>
  </View>
)}

export default App;