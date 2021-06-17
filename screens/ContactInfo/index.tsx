import * as React from "react";
import { StyleSheet, ScrollView, View, Image } from "react-native";
import Bio from "./Bio";
import InfoHeader from "./InfoHeader";
import NameActions from "./NameActions";
import LinkItem from "./LinkItem";

export default function ContactInfo() {
  return (
    <>
      <InfoHeader />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
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
        <View style={styles.linkContainer}>
          <LinkItem icon="Media" title="Media, Links, and Docs" value="12" />
          <LinkItem icon="Starred" title="Starred Messages" value="None" />
          <LinkItem icon="ChatSearch" title="Chat Search" border="no" />
        </View>
        <View style={styles.linkContainer}>
          <LinkItem icon="Mute" title="Mute" value="No" />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  linkContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    marginTop: 19,
  },
});
