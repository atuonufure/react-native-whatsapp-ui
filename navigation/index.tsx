import * as React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator';
import ContactInfo from '../screens/ContactInfo';
import TypeStatus from '../screens/TypeStatus';
import Auth from '../screens/Auth';
import Chat from '../screens/Chat';
import NotFoundScreen from '../screens/NotFoundScreen';
import { ModalWrapper } from '../components';

import { RootStackParamList } from '../types';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const modal = useSelector((state: RootStateOrAny) => state.modal.showModal);

  return (
    <>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Auth">
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Root" component={BottomTabNavigator} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="ContactInfo" component={ContactInfo} />
        <Stack.Screen name="TypeStatus" component={TypeStatus} />
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{ title: 'Oops!' }}
        />
      </Stack.Navigator>
      {modal && <ModalWrapper />}
    </>
  );
}
