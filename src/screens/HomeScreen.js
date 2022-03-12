import {View, StyleSheet} from 'react-native';
import React from 'react';
import HeaderScreen from './HeaderScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';

const HomeScreen = () => {
  return (
    <View>
      <View style={{marginVertical: 30}}>
        <HeaderScreen />
      </View>
      <View
        style={{
          marginVertical: 380,
          flexDirection: 'row',
          height: 65,
          position: 'absolute',
          left: 10,
          right: 10,
        }}>
        <View style={{width: '50%', paddingHorizontal: 10}}>
          <Button
            title="Offers"
            type="solid"
            buttonStyle={{
              ...styles.botones,
            }}
            titleStyle={{
              ...styles.botones_texto,
            }}
          />
        </View>
        <View style={{width: '50%', paddingHorizontal: 10}}>
          <Button
            title="News"
            type="solid"
            buttonStyle={{
              ...styles.botones,
            }}
            titleStyle={{
              ...styles.botones_texto,
            }}
          />
        </View>
      </View>
      <View
        style={{
          height: 65,
          marginVertical: 480,
          position: 'absolute',
          left: 20,
          right: 20,
        }}>
        <Button
          title="Administer"
          type="solid"
          buttonStyle={{
            ...styles.botones,
          }}
          titleStyle={{
            ...styles.botones_texto,
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  botones: {
    width: '100%',
    height: 70,
    borderRadius: 20,
    backgroundColor: '#26de81',
  },
  botones_texto: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
});

export default HomeScreen;
