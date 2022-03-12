import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import HeaderScreen from './HeaderScreen';
import {Card, Button, colors} from 'react-native-elements';
import {Fumi} from 'react-native-textinput-effects';
import Icons from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{marginVertical: 30}}>
        <HeaderScreen />
      </View>
      <View style={{marginVertical: -140, height: 550}}>
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
            <Button type='clear' title="Not yet a member? Sign Up" titleStyle={{fontSize: 14}} buttonStyle={{left: '150%'}}
            />
            <View style={{marginVertical: 20}}>
            <Button type="outline"
            title="Submit"
            buttonStyle={{
              borderRadius: 15,
              borderColor: '#D7DF01',
              flexDirection: 'row',
              width: '80%',
              alignSelf: 'center',
              borderWidth: 1.5,
            }} 
            titleStyle={{color: "#04B404", fontSize:18 }}
            onPress={()=>navigation.navigate("Home")}/>
            </View>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
