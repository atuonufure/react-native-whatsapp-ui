import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { RightArrowIcon } from "../../../components/icons";

export default function EditContact() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF", paddingLeft: 16 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: 50,
        }}
      >
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold", width: 96 }}>
            Name
          </Text>
        </View>
        <View
          style={{
            flexGrow: 1,
            paddingLeft: 16,
            borderBottomWidth: 0.33,
            borderBottomColor: "#3c3c432f",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <TextInput style={{ fontSize: 16 }} value="Martha" />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: 50,
        }}
      >
        <View
          style={{
            flexGrow: 1,
            marginLeft: 96,
            paddingLeft: 16,
            borderBottomWidth: 0.33,
            borderBottomColor: "#3c3c432f",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <TextInput style={{ fontSize: 16 }} value="Craig" />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: 50,
        }}
      >
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold", width: 96 }}>
            Phone
          </Text>
        </View>
        <View
          style={{
            flexGrow: 1,
            paddingLeft: 16,
            borderBottomWidth: 0.33,
            borderBottomColor: "#3c3c432f",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                height: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text>New Zealand</Text>
              <RightArrowIcon style={{ marginRight: 16 }} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: 50,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: 96,
            height: "100%",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, color: "#007AFF" }}>mobile</Text>
          <RightArrowIcon style={{ marginLeft: 6 }} />
        </View>
        <View
          style={{
            flexGrow: 1,
            paddingLeft: 16,
            borderBottomWidth: 0.33,
            borderBottomColor: "#3c3c432f",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <TextInput
            style={{ fontSize: 16 }}
            value="+1 202 555 0181"
            keyboardType="number-pad"
          />
        </View>
      </View>

      <TouchableOpacity style={{ height: 50, justifyContent: "center" }}>
        <Text style={{ fontSize: 16, color: "#007AFF" }}>more fields</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ height: 50, justifyContent: "center" }}>
        <Text style={{ fontSize: 16, color: "#FF3B30" }}>Delete Contact</Text>
      </TouchableOpacity>
    </View>
  );
}
