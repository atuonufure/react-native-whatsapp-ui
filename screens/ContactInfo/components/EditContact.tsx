import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { RightArrowIcon } from "../../../components/icons";

export default function EditContact() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Name</Text>
        </View>
        <View>
          <TextInput value="Martha" />
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View></View>
        <View>
          <TextInput value="Craig" />
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View>
          <Text>Phone</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput value="New Zealand" />
          <RightArrowIcon />
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text style={{ fontSize: 16, color: "#007AFF" }}>mobile</Text>
          <RightArrowIcon />
        </TouchableOpacity>
        <View>
          <TextInput value="+1 202 555 0181" />
        </View>
      </View>
    </View>
  );
}
