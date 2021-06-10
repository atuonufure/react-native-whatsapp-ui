import React from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Header } from "../components";
import { RightArrowIcon } from "../components/icons";
import { RootStackParamList } from "../types";

interface AuthType {
  navigation: StackNavigationProp<RootStackParamList, "Root">;
}

export default function Auth({ navigation }: AuthType) {
  return (
    <View style={styles.container}>
      <Header
        center="Phone number"
        right="Done"
        action={() => navigation.navigate("Root")}
      />
      <View style={styles.background}>
        <View style={styles.pleaseConfirm}>
          <Text style={styles.confirmText}>
            Please confirm your country code and{`\n`}enter your phone number
          </Text>
        </View>
        <View style={[styles.countryBorder, styles.border]}>
          <TouchableOpacity style={styles.inputContainer}>
            <Text style={styles.country}>United States</Text>
            <View style={styles.rightArrow}>
              <RightArrowIcon />
            </View>
          </TouchableOpacity>
          <View
            style={[styles.codeBorder, styles.inputContainer, styles.border]}
          >
            <Text style={[styles.countryCode, styles.border]}>+1</Text>
            <TextInput
              placeholder="phone number"
              placeholderTextColor="#C7C7CC"
              keyboardType="numeric"
              style={styles.numberInput}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F6F6",
  },
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
  background: {
    backgroundColor: "#FFFFFF",
    height: "100%",
  },
  confirmText: {
    textAlign: "center",
    fontSize: 15,
  },
  countryBorder: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  codeBorder: {
    borderTopWidth: 0.5,
  },
  numberInput: {
    fontSize: 26,
    paddingLeft: 9.5,
    paddingHorizontal: 7,
  },
});
