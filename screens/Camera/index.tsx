import * as React from "react";
import { StyleSheet, View, Image } from "react-native";

export default function Camera() {
  return (
    <View style={styles.container}>
      <View style={styles.bar} />
      <View style={styles.cameraView}>
        <Image
          style={styles.camera}
          source={require("../../assets/camera/cameraView.png")}
        />
      </View>
      <View style={styles.bar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
  bar: { height: 73, width: "100%", backgroundColor: "#000000" },
  cameraView: { width: "100%" },
  camera: { width: "100%" },
});
