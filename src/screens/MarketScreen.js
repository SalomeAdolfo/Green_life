import {View, Text, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderScreen from './HeaderScreen';
import {Card, Button} from 'react-native-elements';

const MarketScreen = () => {
  return (
    <View style={{marginVertical: 10, flex: 1, bottom: 100}}>
      <View style={{marginVertical: 110, height: 135}}>
        <HeaderScreen />
      </View>
      <View style={{marginVertical: '-25%',justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>
        <View style={{flexDirection: 'row'}}>
          <Card containerStyle={{width:160, borderRadius:15, elevation:0.5, shadowColor: 'green'}}>
              <Image source={require('../../assets/img/vegetables.png')} style={{alignSelf: 'center', width: 128, height:128}} />
              <Button type='clear' title={'Vegetables'} titleStyle={{color:'#EB1F4F', fontSize: 20}} buttonStyle={{borderRadius:15}} />
          </Card>

          <Card containerStyle={{width:160, borderRadius:15, elevation:0.5, shadowColor: 'green'}}>
              <Image source={require('../../assets/img/fertilizer.png')} style={{alignSelf: 'center', width: 128, height:128}}/>
              <Button type='clear' title={'Fertilizers'} titleStyle={{color:'#EB1F4F', fontSize: 20}} buttonStyle={{borderRadius:15}} />
          </Card>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Card containerStyle={{width:160, borderRadius:15, elevation:0.5, shadowColor: 'green'}}>
              <Image source={require('../../assets/img/seed.png')} style={{alignSelf: 'center', width: 128, height:128}} />
              <Button type='clear' title={'Seeds'} titleStyle={{color:'#EB1F4F', fontSize: 20}} buttonStyle={{borderRadius:15}} />
          </Card>

          <Card containerStyle={{width:160, borderRadius:15, elevation:0.5, shadowColor: 'green'}}>
              <Image source={require('../../assets/img/tools.png')} style={{alignSelf: 'center', width: 128, height:128}} />
              <Button type='clear' title={'Tools'} titleStyle={{color:'#EB1F4F', fontSize: 20}} buttonStyle={{borderRadius:15}} />
          </Card>
        </View>
      </View>
    </View>
  );
};

export default MarketScreen;
