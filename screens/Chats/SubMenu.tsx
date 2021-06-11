import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface SubMenuType {
  editMode: boolean;
}

export default function SubMenu({ editMode }: SubMenuType) {
  return (
    <View style={styles.container}>
      {!editMode ? (
        <>
          <TouchableOpacity>
            <Text style={[styles.text]}>Broadcast Lists</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.text]}>New group</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View>
            <Text style={[styles.text, { color: "#C7C7CC" }]}>
              Broadcast Lists
            </Text>
          </View>
          <View>
            <Text style={[styles.text, { color: "#C7C7CC" }]}>New group</Text>
          </View>
        </>
      )}
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
