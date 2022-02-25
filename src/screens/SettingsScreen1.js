import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingsScreen1 = () => {
  return (
    <View>
      <Text style={{color: 'black'}}>SettingsScreengggg1</Text>
      <Icon.Button name="wechat" backgroundColor="#3b5998">
        <Text style={{fontFamily: 'Arial', fontSize: 15}}>
          Login with Facebook
        </Text>
      </Icon.Button>
    </View>
  );
};

export default SettingsScreen1;
