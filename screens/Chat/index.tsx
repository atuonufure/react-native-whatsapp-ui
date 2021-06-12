import React from "react";
import { View, Text } from "react-native";
import ChatHeader from "./ChatHeader";

type routeType = {
  route: { params: { name: string; avatar: string } };
}

export default function Chat({ route }: routeType) {
  const { name, avatar } = route.params;
  return (
    <View>
      <ChatHeader name={name} avatar={avatar} />
      <Text>Chat</Text>
    </View>
  );
}
