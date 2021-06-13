import React from "react";
import { View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  AddIcon,
  StickersIcon,
  CameraIcon,
  RecordAudioIcon,
} from "../../components/icons";

export default function SendMessage() {
  return (
    <View
      style={{
        backgroundColor: "#F6F6F6",
        height: 80,
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <TouchableOpacity>
        <AddIcon />
      </TouchableOpacity>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={{
            height: 32,
            width: 228,
            borderWidth: 1,
            borderColor: "#8E8E93",
            backgroundColor: "#FFFFFF",
            fontSize: 16,
            borderRadius: 16,
            paddingHorizontal: 10,
          }}
        />
        <TouchableOpacity>
          <StickersIcon />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <CameraIcon color="#007AFF" />
      </TouchableOpacity>
      <TouchableOpacity>
        <RecordAudioIcon />
      </TouchableOpacity>
    </View>
  );
}
