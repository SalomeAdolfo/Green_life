import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen1 from "../screens/HomeScreen";

const HomeStackScreen = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator screenOptions={
      {
        headerTitleAlign: 'center', //Ayuda a poner el titulo al centro
        headerTitleStyle:{ //iniciamos los estilos para el titulo
          color: 'green',
          fontSize:30,
          fontFamily: 'Arial',
          fontWeight: 'bold'
        },
      }
    }>
      <HomeStack.Screen name="Green Life" component={HomeScreen1} options={{
        contentStyle:{
          alignItems : 'center',
          justifyContent: 'center'
        },
      }}/>
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;