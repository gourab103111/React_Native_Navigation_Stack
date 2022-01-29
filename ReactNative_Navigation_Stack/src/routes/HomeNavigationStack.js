import React from 'react';
import {Splashscreen} from '../screens/Splashscreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';

export const HomeNavigationStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Home Screen'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
