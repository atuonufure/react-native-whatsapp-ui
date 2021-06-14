import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { setModalWindow } from "../redux/modalSlice";

export default function ModalWrapper() {
  let modalItems: Array<string> = [];
  const dispatch = useDispatch();
  const modalType = useSelector((state: any) => state.modal.modalType);
  switch (modalType) {
    case "chats":
      modalItems = [
        "Mute",
        "Contact Info",
        "Export Chat",
        "Clear Chat",
        "Delete Chat",
      ];
      break;
    case "chat":
      modalItems = [
        "Camera",
        "Photo & Video Library",
        "Document",
        "Location",
        "Contact",
      ];
      break;
  }
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {modalItems.map((el, index) => (
          <View
            key={`${el}${index}`}
            style={
              el != "Delete Chat" && {
                borderBottomColor: "#C6C6C8",
                borderBottomWidth: 1,
              }
            }
          >
            <TouchableOpacity style={styles.modailItem}>
              <Text
                style={[
                  { fontSize: 20 },
                  { color: el != "Delete Chat" ? "#007AFF" : "#FF3B30" },
                ]}
              >
                {el}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={styles.cancel}>
        <TouchableOpacity
          style={styles.cancelItem}
          onPress={() => {
            dispatch(setModalWindow(false));
          }}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#00000060",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  main: {
    width: "90%",
    backgroundColor: "#ECECED",
    borderRadius: 15,
  },
  modailItem: {
    height: 56,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cancel: {
    width: "90%",
    height: 57,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    marginBottom: 44,
    marginTop: 7.5,
  },
  cancelItem: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  cancelText: { fontSize: 19, fontWeight: "bold", color: "#007AFF" },
});
