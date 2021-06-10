import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Calls from "../screens/Calls";
import Camera from "../screens/Camera";
import Chats from "../screens/Chats";
import Settings from "../screens/Settings";
import Status from "../screens/Status";
import {
  CallsIcon,
  CameraIcon,
  ChatsIcon,
  SettingsIcon,
  StatusIcon,
} from "../components/icons";

import { BottomTabParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Status"
        component={Status}
        options={{
          tabBarIcon: ({ color }) => <StatusIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarIcon: ({ color }) => <CallsIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarIcon: ({ color }) => <CameraIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: ({ color }) => <ChatsIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
