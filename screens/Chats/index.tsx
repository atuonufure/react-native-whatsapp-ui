import * as React from "react";
import { StyleSheet } from "react-native";

import { Header, SubMenu } from "../../components";
import { EditChatsIcon } from "../../components/icons";
import { Text, View } from "../../components/Themed";

export default function Chats() {
  return (
    <View style={styles.container}>
      <Header left="Edit" center="Chats" right={<EditChatsIcon />} action={() => {}} />
      <SubMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F6F6",
  },
});
