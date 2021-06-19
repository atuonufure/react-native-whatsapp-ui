import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { SwipeRow } from "react-native-swipe-list-view";

import { setModalType, setModalWindow } from "../../redux/modalSlice";
import { ArchiveIcon, EditChatsIcon, MoreIcon } from "../../components/icons";
import { Header } from "../../components";
import SubMenu from "./SubMenu";
import ChatsItem from "./ChatsItem";

import { chats } from "../../data";

export default function Chats() {
  const [editMode, setEditMode] = React.useState(false);
  const dispatch = useDispatch();

  return (
    <View style={[styles.containerMain, !editMode && styles.white]}>
      <Header
        left="Edit"
        center="Chats"
        editMode={editMode}
        right={<EditChatsIcon />}
        action={() => setEditMode(!editMode)}
      />
      {editMode && (
        <View>
          <Text style={styles.chats}>Chats</Text>
        </View>
      )}
      <SubMenu editMode={editMode} />
      <ScrollView>
        {chats.length > 0 ? (
          chats.map((el) => (
            <View key={el.id}>
              <View style={styles.container}>
                {!editMode ? (
                  <SwipeRow rightOpenValue={-148}>
                    <View style={styles.standaloneRowBack}>
                      <TouchableOpacity
                        onPress={() => {
                          dispatch(setModalType("chats"));
                          dispatch(setModalWindow(true));
                        }}
                        style={[styles.subMenu, styles.swipeMore]}
                      >
                        <View style={styles.moreIcon}>
                          <MoreIcon />
                        </View>
                        <Text style={[styles.backTextWhite]}>More</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.subMenu, styles.swipeArchive]}
                      >
                        <ArchiveIcon />
                        <Text style={styles.backTextWhite}>Archive</Text>
                      </TouchableOpacity>
                    </View>
                    <ChatsItem
                      key={el.id}
                      name={el.name}
                      lastMessage={el.lastMessage}
                      date={el.date}
                      avatar={el.avatar}
                      editMode={editMode}
                      messageIcon={el.icon}
                    />
                  </SwipeRow>
                ) : (
                  <ChatsItem
                    key={el.id}
                    name={el.name}
                    lastMessage={el.lastMessage}
                    date={el.date}
                    avatar={el.avatar}
                    editMode={editMode}
                  />
                )}
              </View>
            </View>
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
  containerMain: {
    flex: 1,
  },
  chats: { fontSize: 34, fontWeight: "bold", marginLeft: 16 },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  standaloneRowFront: {
    alignItems: "center",
    backgroundColor: "#CCC",
    justifyContent: "center",
    height: 74,
  },
  standaloneRowBack: {
    alignItems: "center",
    flex: 1,
    height: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  backTextWhite: {
    color: "#FFF",
    fontSize: 14,
  },
  subMenu: {
    width: 74,
    alignItems: "center",
    paddingVertical: "100%",
  },
  white: { backgroundColor: "#F6F6F6" },
  swipeMore: {
    backgroundColor: "#C6C6CC",
    marginTop: 9,
  },
  swipeArchive: {
    backgroundColor: "#3E70A7",
  },
  moreIcon: { marginBottom: 13.5 },
});
