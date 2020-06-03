import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './Views/Inicio';
import Nosotros from './Views/Nosotros';


const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"

          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#F4511E'
            },
            headerTintColor: '#FFF',
            headerTitleStyle:{
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen 
            name="Inicio"
            component={Inicio}
            options={{
              title: "Componente Principal",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#FFF'
              },
              headerTintColor: '#000',
              headerTitleStyle:{
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen 
            name="Nosotros"
            component={Nosotros}
            options={ ({route}) => ({
              title: route.params.clienteId
            }) }
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
