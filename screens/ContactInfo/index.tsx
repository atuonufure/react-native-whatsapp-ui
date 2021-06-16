import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Bio from "./Bio";
import InfoHeader from "./InfoHeader";
import NameActions from "./NameActions";

export default function ContactInfo() {
  return (
    <View style={styles.container}>
      <InfoHeader />
      <Image
        source={require("../../assets/images/ContactInfo.png")}
        style={{ width: "100%" }}
      />
      <View
        style={{
          width: "100%",
          backgroundColor: "#FFFFFF",
        }}
      >
        <NameActions />
        <Bio />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 44,
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
