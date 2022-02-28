//Este screen es solo la parte superior de la mayoria de las Screens, se importó para que
//sea reusable.
import {View, Image} from 'react-native';
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
        <View style={{borderRadius: 200, width: 400, height: 300, flex: 1}}>
          <Image
            source={require('../../assets/img/85246-h.jpg')}
            resizeMode="cover"
            style={{width: 400, height: 300, opacity: 0.4, borderRadius: 200}}
          />
        </View>
        <View style={{left: '85%', top: -180}}>
          <Icon name="info-circle" size={30} style={{color: 'black'}}></Icon>
        </View>
        <View>
          <Image
            source={require('../../assets/img/logo_negro.png')}
            style={{
              width: 200,
              height: 200,
              marginVertical: -210,
              marginHorizontal: 105,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default HeaderScreen;
