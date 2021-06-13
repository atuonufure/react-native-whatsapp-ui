import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
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
      <ScrollView>
        <Image
          style={{ width: "100%" }}
          source={require("../../assets/images/chatBackground.png")}
        />
      </ScrollView>
      <SendMessage />
    </View>
  );
}
