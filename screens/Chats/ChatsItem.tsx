import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { RightArrowIcon, SelectIcon } from "../../components/icons";
import { MockAvatar } from "../../components";

interface ChatsItemType {
  name: string;
  lastMessage: string;
  date: string;
  avatar: string;
  editMode: boolean;
}

export default function ChatsItem({
  name,
  lastMessage,
  date,
  avatar,
  editMode,
}: ChatsItemType) {
  return (
    <View style={styles.subContainer}>
      <TouchableOpacity style={styles.container}>
        {editMode && (
          <View style={styles.select}>
            <SelectIcon />
          </View>
        )}
        <View style={styles.avatarPart}>
          <MockAvatar avatar={avatar} />
        </View>
        <View style={styles.messagePart}>
          <View style={styles.upperMessagePart}>
            <Text style={styles.name}>{name}</Text>
            <Text style={[styles.date, editMode && { marginRight: 16 }]}>
              {date}
            </Text>
          </View>
          <Text style={styles.message}>{lastMessage}</Text>
        </View>
        {!editMode && (
          <View style={styles.arrowPart}>
            <RightArrowIcon />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: { flex: 1, backgroundColor: "#FFFFFF" },
  container: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    height: 74,
  },
  avatarPart: {
    justifyContent: "center",
    alignItems: "center",
  },
  arrowPart: {
    width: 35,
    paddingLeft: 10,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.33,
    borderBottomColor: "rgba(60, 60, 67, 0.29)",
  },
  messagePart: {
    flexGrow: 1,
    flexDirection: "column",
    borderBottomWidth: 0.33,
    borderBottomColor: "rgba(60, 60, 67, 0.29)",
  },
  upperMessagePart: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: {
    color: "#8E8E93",
    paddingTop: 10,
    fontSize: 14,
  },
  name: {
    paddingTop: 8,
    fontWeight: "bold",
    fontSize: 16,
  },
  message: {
    fontSize: 14,
    paddingTop: 6,
    color: "#8E8E93",
    width: 200,
  },
  select: {
    justifyContent: "center",
    marginLeft: 17,
  },
});
