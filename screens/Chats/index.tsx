import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Header } from "../../components";
import { EditChatsIcon } from "../../components/icons";
import { Text, View } from "../../components/Themed";
import SubMenu from "./SubMenu";
import { chats } from "./data";
import ChatsItem from "./ChatsItem";

export default function Chats() {
  return (
    <View style={styles.container}>
      <Header left="Edit" center="Chats" right={<EditChatsIcon />} action={() => {}} />
      <SubMenu />
      <ScrollView>
        {chats.length > 0 ? (
          chats.map((el) => (
            <ChatsItem
              key={el.id}
              name={el.name}
              lastMessage={el.lastMessage}
              date={el.date}
              avatar={el.avatar}
            />
          ))
        ) : (
          <View>
            <Text>No chats</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },
});
