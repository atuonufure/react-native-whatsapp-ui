import React from "react";
import { View, Text } from "react-native";

export default function Bio() {
  return (
    <View
      style={{
        height: 60,
        justifyContent: "center",
        paddingLeft: 15,
      }}
    >
      <Text style={{ fontSize: 14, marginVertical: 3.5 }}>
        Design adds value faster, than it adds cost
      </Text>
      <Text style={{ color: "#8E8E93", fontSize: 12, marginVertical: 3.5 }}>
        Dec 18, 2018
      </Text>
    </View>
  );
}
