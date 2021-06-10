import React from "react";
import { Image, View, StyleSheet } from "react-native";

interface MockAvatarType {
  avatar?: string;
}

export default function MockAvatar({ avatar }: MockAvatarType) {
  console.log(avatar);
  switch (avatar) {
    case "../assets/avatars/MartinRandolph.png":
      return (
        <Image
          source={require("../assets/avatars/MartinRandolph.png")}
          style={styles.avatar}
        />
      );
    case "../assets/avatars/AndrewParker.png":
      return (
        <Image
          source={require("../assets/avatars/AndrewParker.png")}
          style={styles.avatar}
        />
      );
    case "../assets/avatars/KarenCastillo.png":
      return (
        <Image
          source={require("../assets/avatars/KarenCastillo.png")}
          style={styles.avatar}
        />
      );
    case "../assets/avatars/MaximillianJacobson.png":
      return (
        <Image
          source={require("../assets/avatars/MaximillianJacobson.png")}
          style={styles.avatar}
        />
      );
    case "../assets/avatars/MarthaCraig.png":
      return (
        <Image
          source={require("../assets/avatars/MarthaCraig.png")}
          style={styles.avatar}
        />
      );
    case "../assets/avatars/TabithaPotter.png":
      return (
        <Image
          source={require("../assets/avatars/TabithaPotter.png")}
          style={styles.avatar}
        />
      );
    case "../assets/avatars/MaisyHumphrey.png":
      return (
        <Image
          source={require("../assets/avatars/MaisyHumphrey.png")}
          style={styles.avatar}
        />
      );
    case "../assets/avatars/KieronDotson.png":
      return (
        <Image
          source={require("../assets/avatars/KieronDotson.png")}
          style={styles.avatar}
        />
      );
    default:
      return <View style={styles.avatar} />;
  }
}

const styles = StyleSheet.create({
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    marginLeft: 16,
    marginRight: 12,
  },
});
