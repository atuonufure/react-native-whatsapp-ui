import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { BackArrowIcon } from "../../../components/icons";

type InfoHeaderType = {
  edit: boolean;
  setEdit: (arg0: boolean) => void;
};

export default function InfoHeader({ edit, setEdit }: InfoHeaderType) {
  const navigation = useNavigation();
  return (
    <View
      style={[
        {
          height: 88,
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 44,
        },
        edit && { backgroundColor: "#FFFFFF" },
      ]}
    >
      <TouchableOpacity
        style={{ flexBasis: "33%", flexDirection: "row" }}
        onPress={() => navigation.navigate("Chat")}
      >
        {!edit && (
          <BackArrowIcon
            style={{ marginLeft: 9, marginRight: 5, marginTop: 1 }}
          />
        )}
        <Text
          style={[
            { textAlign: "left", color: "#007AFF", fontSize: 17 },
            edit && { marginLeft: 16 },
          ]}
        >
          {!edit ? "Martha Craig" : "Cancel"}
        </Text>
      </TouchableOpacity>
      <View style={{ flexBasis: "34%" }}>
        <Text style={{ textAlign: "center", fontSize: 17, fontWeight: "bold" }}>
          {!edit ? "Contact Info" : "Edit Contact"}
        </Text>
      </View>
      <TouchableOpacity
        style={{ flexBasis: "33%" }}
        onPress={() => setEdit(!edit)}
      >
        <Text
          style={[
            {
              textAlign: "right",
              color: "#007AFF",
              fontSize: 17,
              marginRight: 16,
            },
            edit && { color: "#D1D1D6" },
          ]}
        >
          {!edit ? "Edit" : "Save"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
