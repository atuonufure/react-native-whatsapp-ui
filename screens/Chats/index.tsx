import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";

import { Header } from "../../components";
import { EditChatsIcon } from "../../components/icons";
import { Text, View } from "../../components/Themed";
import SubMenu from "./SubMenu";
import { chats } from "../../constants/Data";
import ChatsItem from "./ChatsItem";

export default function Chats() {
  const [editMode, setEditMode] = React.useState(false);
  return (
    <View
      style={[
        styles.container,
        !editMode
          ? {
              backgroundColor: "#F6F6F6",
            }
          : null,
      ]}
    >
      <Header
        left="Edit"
        center="Chats"
        editMode={editMode}
        right={<EditChatsIcon />}
        action={() => setEditMode(!editMode)}
      />
      {!editMode ? null : (
        <View>
          <Text style={styles.chats}>Chats</Text>
        </View>
      )}
      <SubMenu editMode={editMode} />
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
  },
  chats: { fontSize: 34, fontWeight: "bold", marginLeft: 16 },
});
