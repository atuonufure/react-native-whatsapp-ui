import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import {
  AddIcon,
  StickersIcon,
  CameraIcon,
  RecordAudioIcon,
} from "../../components/icons";
import { setModalType, setModalWindow } from "../../redux/modalSlice";

export default function SendMessage() {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <TouchableOpacity>
          <AddIcon />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} />
          <View style={styles.sticker}>
            <TouchableOpacity
              onPress={() => {
                dispatch(setModalType("chat"));
                dispatch(setModalWindow(true));
              }}
            >
              <StickersIcon />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <CameraIcon color="#007AFF" />
        </TouchableOpacity>
        <TouchableOpacity>
          <RecordAudioIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 32,
    width: 228,
    borderWidth: 1,
    borderColor: "#8E8E93",
    backgroundColor: "#FFFFFF",
    fontSize: 16,
    borderRadius: 16,
    paddingHorizontal: 10,
  },
  container: { backgroundColor: "#F6F6F6", height: 46 },
  sticker: { position: "absolute", paddingRight: 7.5 },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  upperContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 46,
  },
});
