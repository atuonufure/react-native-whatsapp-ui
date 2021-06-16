import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { BackArrowIcon } from "../../components/icons";

export default function InfoHeader() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 44,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{ flexBasis: "33%", flexDirection: "row" }}
        onPress={() => navigation.navigate("Chat")}
      >
        <BackArrowIcon
          style={{ marginLeft: 9, marginRight: 5, marginTop: 1 }}
        />
        <Text style={{ textAlign: "left", color: "#007AFF", fontSize: 17 }}>
          Martha Craig
        </Text>
      </TouchableOpacity>
      <View style={{ flexBasis: "34%" }}>
        <Text style={{ textAlign: "center", fontSize: 17, fontWeight: "bold" }}>
          Contact Info
        </Text>
      </View>
      <TouchableOpacity style={{ flexBasis: "33%" }}>
        <Text
          style={{
            textAlign: "right",
            color: "#007AFF",
            fontSize: 17,
            marginRight: 16,
          }}
        >
          Edit
        </Text>
      </TouchableOpacity>
    </View>
  );
}
