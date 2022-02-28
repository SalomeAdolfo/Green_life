import {View, Text} from 'react-native';
import React from 'react';
import HeaderScreen from './HeaderScreen';
import {Card} from 'react-native-elements';
import {Fumi} from 'react-native-textinput-effects';
import Icons from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
  return (
    <View>
      <View style={{flex: 1, marginVertical: 70}}>
        <HeaderScreen />
      </View>
      <View style={{marginVertical: 90}}>
        <Card
          containerStyle={{
            height: 360,
            position: 'absolute',
            left: 5,
            right: 5,
            elevation: 10,
            borderRadius: 20,
            shadowColor: '#00FF40',
          }}>
          <View style={{marginVertical: '30%'}}>
            <Fumi
              label={'Username'}
              iconClass={Icons}
              iconName={'user-circle-o'}
              iconColor={'#f95a25'}
              iconSize={30}
              iconWidth={50}
              inputPadding={18}
              style={{}}
            />
            <Fumi
              label={'Password'}
              iconClass={Icons}
              iconName={'lock'}
              iconColor={'#f95a25'}
              iconSize={30}
              iconWidth={50}
              inputPadding={18}
              style={{}}
            />
          </View>
        </Card>
      </View>
    </View>
  );
};

export default LoginScreen;
