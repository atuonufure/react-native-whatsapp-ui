import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Header, MockAvatar } from "../../components";
import CameraButtonIcon from "./icons/CameraButtonIcon";
import EditButtonIcon from "./icons/EditButtonIcon";

export default function Status() {
  return (
    <View style={{ flex: 1 }}>
      <Header left="Privacy" center="Status" />
      <View
        style={{
          backgroundColor: "#EFEFF4",
          flexGrow: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "#FFFFFF",
            height: 76,
            alignItems: "center",
            marginTop: 35,
            marginBottom: 35,
            flexDirection: "row",
          }}
        >
          <MockAvatar avatar="../assets/avatars/StatusAvatar.png" size={58} />
          <View style={{ flexGrow: 1 }}>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                My Status
              </Text>
            </View>
            <View>
              <Text style={{ color: "#8E8E93" }}>Add to my status</Text>
            </View>
          </View>
          <View
            style={{
              width: 88,
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 16,
            }}
          >
            <TouchableOpacity>
              <CameraButtonIcon />
            </TouchableOpacity>
            <TouchableOpacity>
              <EditButtonIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            height: 43,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#8E8E93", fontSize: 14 }}>
            No recent updates to show right now.
          </Text>
        </View>
      </View>
    </View>
  );
}
