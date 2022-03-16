import {View, StyleSheet, FlatList, Text, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import HeaderScreen from './HeaderScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Card} from 'react-native-elements';

const data = [
  {
    titulo: 'Lechuga',
    imagen:
      'https://th.bing.com/th/id/OIP.f5Gn3smjpbYTmNtYjEHnmQHaHa?pid=ImgDet&rs=1',
    descripcion: 'Lechuga romana 1',
  },
  {
    titulo: 'Lechuga',
    imagen:
      'https://th.bing.com/th/id/OIP.f5Gn3smjpbYTmNtYjEHnmQHaHa?pid=ImgDet&rs=1',
    descripcion: 'Lechuga romana 2',
  },
  {
    titulo: 'Lechuga',
    imagen:
      'https://th.bing.com/th/id/OIP.f5Gn3smjpbYTmNtYjEHnmQHaHa?pid=ImgDet&rs=1',
    descripcion: 'Lechuga romana 3',
  },
  {
    titulo: 'Lechuga',
    imagen:
      'https://th.bing.com/th/id/OIP.f5Gn3smjpbYTmNtYjEHnmQHaHa?pid=ImgDet&rs=1',
    descripcion: 'Lechuga romana 4',
  },
];

const Item = ({titulo, imagen, descripcion}) => (
  <View style={{height: 300}}>
    <Card containerStyle={{...styles.Cards}}>
      <Card.Title>{titulo}</Card.Title>
      <Card.Image source={{uri: imagen}}></Card.Image>
      <Text style={{color: 'black', alignSelf:'center'}}>{descripcion}</Text>
    </Card>
  </View>
);

const HomeScreen = () => {
  const renderItem = ({item}) => (
    <Item
      titulo={item.titulo}
      imagen={item.imagen}
      descripcion={item.descripcion}
    />
  );
  return (
    <View>
      <View>
        <HeaderScreen />
      </View>
      <FlatList
        style={{marginVertical: '20%'}}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.descripcion}
        horizontal
      />
    </View>
  );
};
const styles = StyleSheet.create({
  Cards: {
    width: 200,
    height: 250,
    borderRadius: 20,
    elevation: 5,
    shadowColor: 'green',
  }
});
export default HomeScreen;
