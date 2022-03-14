import {View, Text, Switch} from 'react-native';
import React, {useState} from 'react';
import HeaderScreen from './HeaderScreen';
import {Divider} from 'react-native-elements';

const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{marginVertical: 10, flex: 1, bottom: 100}}>
      <View style={{marginVertical: 110, height: 135}}>
        <HeaderScreen />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '100%'
        }}>
        <View style={{flexDirection: 'row', marginVertical: 15}}>
          <Text style={{color: 'black', fontSize:20}}>Silenciar Notificaciones</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{
              marginHorizontal: 20
            }}
          />
        </View>

        <View style={{flexDirection: 'row', marginVertical: 15}}>
          <Text style={{color: 'black', fontSize:20}}>Silenciar Notificaciones</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{
              marginHorizontal: 20
            }}
          />
        </View>

        <View style={{flexDirection: 'row', marginVertical: 15}}>
          <Text style={{color: 'black', fontSize:20}}>Silenciar Notificaciones</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{
              marginHorizontal: 20
            }}
          />
        </View>

        <View style={{flexDirection: 'row', marginVertical: 15}}>
          <Text style={{color: 'black', fontSize:20}}>Silenciar Notificaciones</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{
              marginHorizontal: 20
            }}
          />
        </View>

        <View style={{flexDirection: 'row', marginVertical: 15}}>
          <Text style={{color: 'black', fontSize:20}}>Silenciar Notificaciones</Text>
          <Switch
          style={{
            marginHorizontal: 20
          }}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
