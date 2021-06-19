import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import MediaIcon from "../icons/MediaIcon";
import StarredIcon from "../icons/StarredIcon";
import ChatSearchIcon from "../icons/ChatSearchIcon";
import MuteIcon from "../icons/MuteIcon";
import { RightArrowIcon } from "../../../components/icons";

type LinkItemType = {
  icon: string;
  title: string;
  value?: string;
  border?: string;
};

export default function LinkItem({ icon, title, value, border }: LinkItemType) {
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {icon === "Media" && <MediaIcon style={styles.icon} />}
          {icon === "Starred" && <StarredIcon style={styles.icon} />}
          {icon === "ChatSearch" && <ChatSearchIcon style={styles.icon} />}
          {icon === "Mute" && <MuteIcon style={styles.icon} />}
          <Text style={{ fontSize: 16 }}>{title}</Text>
        </View>
        <View style={styles.link}>
          <Text style={styles.linkText}>{value}</Text>
          <RightArrowIcon style={styles.arrow} />
        </View>
      </TouchableOpacity>
      {border !== "false" && <View style={styles.border} />}
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginTop: 8,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  container: { flexDirection: "row", justifyContent: "space-between" },
  link: { flexDirection: "row", alignItems: "center" },
  linkText: { fontSize: 16 },
  arrow: { marginVertical: 17.5, marginRight: 17, marginLeft: 12 },
  border: {
    borderBottomWidth: 0.33,
    marginLeft: 59,
    borderBottomColor: "#3c3c432f",
  },
});
