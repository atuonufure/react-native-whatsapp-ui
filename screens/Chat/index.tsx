import React from "react";
import { View, ScrollView, Image, StyleSheet } from "react-native";

import ChatHeader from "./ChatHeader";
import SendMessage from "./SendMessage";

type routeType = {
  route: { params: { name: string; avatar: string } };
};

export default function Chat({ route }: routeType) {
  const { name, avatar } = route.params;
  
  return (
    <View style={styles.container}>
      <ChatHeader name={name} avatar={avatar} />
      <ScrollView scrollEnabled={false}>
        <Image
          style={styles.image}
          source={require("../../assets/images/chatBackground.png")}
        />
      </ScrollView>
      <SendMessage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { width: "100%" },
});
