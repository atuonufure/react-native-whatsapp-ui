import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Write from "../icons/Write";
import VideoCall from "../icons/VideoCall";
import Call from "../icons/Call";

export default function NameActions() {
  return (
    <View
      style={{
        height: 66,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 0.33,
        borderBottomColor: "#3c3c4329",
        marginLeft: 15,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Martha Craig</Text>
        <Text style={{ fontSize: 12, color: "#8E8E93" }}>+1 202 555 0181</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingRight: 15,
        }}
      >
        <TouchableOpacity style={{ marginHorizontal: 6 }}>
          <Write />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 6 }}>
          <VideoCall />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 6 }}>
          <Call />
        </TouchableOpacity>
      </View>
    </View>
  );
}
