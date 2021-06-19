import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
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
    <View style={styles.container}>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.backArrow}
          onPress={() => navigation.navigate("Chats")}
        >
          <BackArrowIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userInfo}
          onPress={() => navigation.navigate("ContactInfo")}
        >
          <View>
            <MockAvatar avatar={avatar} size={36} />
          </View>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.tapInfo}>tap here for contact info</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.callsContainer}>
          <TouchableOpacity style={styles.pr25}>
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

const styles = StyleSheet.create({
  container: { height: 88, justifyContent: "flex-end" },
  bottomContainer: { height: 44, flexDirection: "row" },
  backArrow: { width: 62, justifyContent: "center", paddingLeft: 9 },
  userInfo: { flexGrow: 1, flexDirection: "row", alignItems: "center" },
  name: { fontWeight: "bold", fontSize: 16 },
  tapInfo: { fontSize: 12, color: "#8E8E93" },
  callsContainer: { width: 90, alignItems: "center", flexDirection: "row" },
  pr25: { paddingRight: 25 },
});
