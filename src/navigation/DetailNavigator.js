import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '@/constants';
import { Details } from '@/screens';

const Stack = createNativeStackNavigator();

export function DetailNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Details} name={NAVIGATION.details} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
