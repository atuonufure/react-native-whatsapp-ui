import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
interface HeaderType {
  left?: string;
  center?: string;
  right?: string;
  action?: () => void;
}

export default function Header({ left, center, right, action }: HeaderType) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ flexBasis: "23%" }}>
        {left ? <Text style={{ alignSelf: "flex-start" }}>{left}</Text> : null}
      </TouchableOpacity>
      <View style={{ flexBasis: "54%" }}>
        <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 17 }}>{center}</Text>
      </View>
      <TouchableOpacity style={{ flexBasis: "23%" }} onPress={action}>
        {right ? <Text style={styles.right}>{right}</Text> : null}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 44,
    height: 44,
  },
  right: {
    alignSelf: "flex-end",
    fontWeight: "bold",
    color: "#D1D1D6",
    paddingRight: 16,
    fontSize: 17,
  },
});
