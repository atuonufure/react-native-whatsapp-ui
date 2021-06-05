import React from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Header } from "../components";
import { RightArrow } from "../components/icons";
import { RootStackParamList } from "../types";

interface AuthType {
  navigation: StackNavigationProp<RootStackParamList, "Root">;
}

export default function Auth({ navigation }: AuthType) {
  return (
    <View style={{ backgroundColor: "#F6F6F6" }}>
      <Header center="Phone number" right="Done" action={() => navigation.navigate("Root")} />
      <View style={{ backgroundColor: "#FFFFFF", height: "100%" }}>
        <View style={Styles.pleaseConfirm}>
          <Text style={{ textAlign: "center", fontSize: 15 }}>
            Please confirm your country code and{`\n`}enter your phone number
          </Text>
        </View>
        <View style={[{ borderTopWidth: 0.5, borderBottomWidth: 0.5 }, Styles.border]}>
          <TouchableOpacity style={Styles.inputContainer}>
            <Text style={Styles.country}>United States</Text>
            <View style={Styles.rightArrow}>
              <RightArrow />
            </View>
          </TouchableOpacity>
          <View style={[{ borderTopWidth: 0.5 }, Styles.inputContainer, Styles.border]}>
            <Text style={[Styles.countryCode, Styles.border]}>+1</Text>
            <TextInput
              placeholder="phone number"
              placeholderTextColor="#C7C7CC"
              keyboardType="numeric"
              style={{ fontSize: 26, paddingLeft: 9.5, paddingHorizontal: 7 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  pleaseConfirm: {
    justifyContent: "center",
    alignItems: "center",
    height: 78,
  },
  inputContainer: {
    flexDirection: "row",
    height: 45,
  },
  border: {
    borderColor: "rgba(60,60,67, 0.29)",
  },
  country: {
    flexBasis: "70%",
    color: "#007AFF",
    fontSize: 17,
    paddingVertical: 12,
    paddingLeft: 16,
  },
  rightArrow: {
    flexBasis: "30%",
    alignItems: "flex-end",
    paddingVertical: 16,
    paddingHorizontal: 17,
  },
  countryCode: {
    fontSize: 27,
    alignSelf: "center",
    paddingLeft: 29,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 28.5,
    borderRightWidth: 0.2,
  },
});
