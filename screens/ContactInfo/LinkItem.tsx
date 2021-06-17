import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import MediaIcon from "./icons/MediaIcon";
import StarredIcon from "./icons/StarredIcon";
import ChatSearchIcon from "./icons/ChatSearchIcon";
import MuteIcon from "./icons/MuteIcon";
import { RightArrowIcon } from "../../components/icons";

type LinkItemType = {
  icon: string;
  title: string;
  value?: string;
  border?: string;
};

export default function LinkItem({ icon, title, value, border }: LinkItemType) {
  return (
    <>
      <TouchableOpacity
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
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
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 16 }}>{value}</Text>
          <RightArrowIcon
            style={{ marginVertical: 17.5, marginRight: 17, marginLeft: 12 }}
          />
        </View>
      </TouchableOpacity>
      {border !== "no" && (
        <View
          style={{
            borderBottomWidth: 0.33,
            marginLeft: 59,
            borderBottomColor: "#3c3c432f",
          }}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginTop: 8,
    marginBottom: 10,
    marginHorizontal: 15,
  },
});
