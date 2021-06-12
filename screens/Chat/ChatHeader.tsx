import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BackArrowIcon } from "../../components/icons";

type ChatHeaderType = {
  name: string;
  avatar: string;
}

export default function ChatHeader({ name, avatar }: ChatHeaderType) {
  const navigation = useNavigation();
  return (
    <View style={{ height: 88, justifyContent: "flex-end" }}>
      <View style={{ height: 44, flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            width: 62,
            justifyContent: "center",
            paddingLeft: 9,
          }}
          onPress={() => navigation.navigate("Chats")}
        >
          <BackArrowIcon />
        </TouchableOpacity>
        <View
          style={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>{name}</Text>
        </View>
        <View
          style={{ width: 90, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Buttons</Text>
        </View>
      </View>
    </View>
  );
}
