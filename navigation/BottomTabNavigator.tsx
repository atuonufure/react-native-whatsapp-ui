import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Calls from '../screens/Calls';
import Camera from '../screens/Camera';
import Chats from '../screens/Chats';
import Settings from '../screens/Settings';
import Status from '../screens/Status';
import {
  CallsIcon,
  CameraIcon,
  ChatsIcon,
  SettingsIcon,
  StatusIcon,
} from '../components/icons';

import { BottomTabParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName='Chats'>
      <BottomTab.Screen
        name='Status'
        component={Status}
        options={{
          tabBarIcon: ({ color }) => <StatusIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name='Calls'
        component={Calls}
        options={{
          tabBarIcon: ({ color }) => <CallsIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name='Camera'
        component={Camera}
        options={{
          tabBarVisible: false,
          tabBarIcon: ({ color }) => <CameraIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name='Chats'
        component={Chats}
        options={{
          tabBarIcon: ({ color }) => <ChatsIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name='Settings'
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
