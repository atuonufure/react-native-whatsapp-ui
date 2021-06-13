import React from "react";
import { View, Text, ScrollView } from "react-native";
import ChatHeader from "./ChatHeader";
import SendMessage from "./SendMessage";

type routeType = {
  route: { params: { name: string; avatar: string } };
};

export default function Chat({ route }: routeType) {
  const { name, avatar } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <ChatHeader name={name} avatar={avatar} />
      <ScrollView style={{ flexGrow: 1, backgroundColor: "#fffbd4" }}>
        <Text>Chat</Text>
      </ScrollView>
      <SendMessage />
    </View>
  );
}
