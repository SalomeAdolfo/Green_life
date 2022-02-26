//Este screen es solo la parte superior de la mayoria de las Screens, se importó para que 
//sea reusable.
import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <View
      style={{
        backgroundColor: 'rgba(34,255,0,0.9)',
        height: 300,
        width: 400,
        top: '-40%',
        borderRadius: 200,
        left: 0,
      }}>
      <View style={{borderRadius:200, width: 400, height: 300, flex: 1}}>
        <Image
          source={require('../../assets/img/85246-h.jpg')}
          resizeMode= 'cover'
          style={{width: 400, height: 300, opacity: 0.4, borderRadius: 200}}
        />
      </View>
      <Icon
        name="info-circle"
        size={30}
        style={{color: 'black', left: '85%', marginVertical: 90}}></Icon>
      <View>
        <Image
          source={require('../../assets/img/logo_negro.png')}
          style={{width: 140, height: 140, marginVertical: -155}}
        />
      </View>
      <Text
        style={{
          color: 'white',
          fontSize: 50,
          marginVertical: 10,
          left: 90,
          fontWeight: 'bold',
        }}>
        GreenLife
      </Text>
    </View>
  </View>
  )
}

export default HeaderScreen