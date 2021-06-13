import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BackArrowIcon, CallIcon, VideoCallIcon } from "../../components/icons";
import { MockAvatar } from "../../components";

type ChatHeaderType = {
  name: string;
  avatar: string;
};

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
        <TouchableOpacity
          style={{
            flexGrow: 1,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View>
            <MockAvatar avatar={avatar} size={36} />
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>{name}</Text>
            <Text style={{ fontSize: 12, color: "#8E8E93" }}>
              tap here for contact info
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            width: 90,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity style={{ paddingRight: 25 }}>
            <VideoCallIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <CallIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
