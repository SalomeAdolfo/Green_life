import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import HeaderScreen from './HeaderScreen';
import {Card, Button, colors} from 'react-native-elements';
import {Fumi} from 'react-native-textinput-effects';
import Icons from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection:'column', justifyContent: 'center'}}>
      <View>
        <HeaderScreen />
      </View>

      <View style={{alignSelf: 'center', justifyContent: 'center'}}>
        <Card
          containerStyle={{
            width: 300,
            elevation: 5,
            borderRadius: 20,
            shadowColor: '#00FF40',
          }}>
          <Card.Title
            style={{
              color: '#04B404',
              fontSize: 40,
              fontWeight: 'normal',
              fontFamily: 'sans-serif',
            }}>
            Log In
          </Card.Title>
          <View style={{}}>
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
              secureTextEntry={true}
              style={{}}
            />
            <Button
              type="clear"
              title="Not yet a member? Sign Up"
              titleStyle={{fontSize: 14}}
              buttonStyle={{left: '100%'}}
            />
            <View style={{marginVertical: 20}}>
              <Button
                type="outline"
                title="Submit"
                buttonStyle={{
                  borderRadius: 15,
                  borderColor: '#D7DF01',
                  flexDirection: 'row',
                  width: '80%',
                  alignSelf: 'center',
                  borderWidth: 1,
                }}
                titleStyle={{color: '#04B404', fontSize: 18}}
                onPress={() => navigation.navigate('Home')}
              />
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
};

export default LoginScreen;
