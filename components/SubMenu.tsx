import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function SubMenu() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>Broadcast Lists</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>New group</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "#007AFF",
    fontSize: 17,
    paddingHorizontal: 16,
  },
});
