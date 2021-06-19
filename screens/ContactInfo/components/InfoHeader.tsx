import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BackArrowIcon } from "../../../components/icons";

type InfoHeaderType = {
  edit: boolean;
  setEdit: (arg0: boolean) => void;
};

export default function InfoHeader({ edit, setEdit }: InfoHeaderType) {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, edit && { backgroundColor: "#FFFFFF" }]}>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => (edit ? setEdit(!edit) : navigation.navigate("Chat"))}
      >
        {!edit && <BackArrowIcon style={styles.backArrow} />}
        <Text style={[styles.backText, edit && styles.backTextEdit]}>
          {!edit ? "Martha Craig" : "Cancel"}
        </Text>
      </TouchableOpacity>
      <View style={styles.centerContainer}>
        <Text style={styles.centerText}>
          {!edit ? "Contact Info" : "Edit Contact"}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.rightContainer}
        onPress={() => setEdit(!edit)}
      >
        <Text style={[styles.rightText, edit && styles.rightTextEdit]}>
          {!edit ? "Edit" : "Save"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 88,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 44,
  },
  backContainer: { flexBasis: "33%", flexDirection: "row" },
  backArrow: { marginLeft: 9, marginRight: 5, marginTop: 1 },
  backText: { textAlign: "left", color: "#007AFF", fontSize: 17 },
  backTextEdit: { marginLeft: 16 },
  centerContainer: { flexBasis: "34%" },
  centerText: { textAlign: "center", fontSize: 17, fontWeight: "bold" },
  rightContainer: { flexBasis: "33%" },
  rightText: {
    textAlign: "right",
    color: "#007AFF",
    fontSize: 17,
    marginRight: 16,
  },
  rightTextEdit: { color: "#D1D1D6" },
});
