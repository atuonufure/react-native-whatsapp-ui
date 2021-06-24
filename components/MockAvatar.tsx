import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

type MockAvatarType = {
  avatar?: string;
  size: number;
};

export default function MockAvatar({ avatar, size }: MockAvatarType) {
  switch (avatar) {
    case '../assets/avatars/MartinRandolph.png':
      return (
        <Image
          source={require('../assets/avatars/MartinRandolph.png')}
          style={[
            styles.avatar,
            { width: size, height: size },
            styles.chatAvatar,
          ]}
        />
      );
    case '../assets/avatars/AndrewParker.png':
      return (
        <Image
          source={require('../assets/avatars/AndrewParker.png')}
          style={[
            styles.avatar,
            { width: size, height: size },
            styles.chatAvatar,
          ]}
        />
      );
    case '../assets/avatars/KarenCastillo.png':
      return (
        <Image
          source={require('../assets/avatars/KarenCastillo.png')}
          style={[
            styles.avatar,
            { width: size, height: size },
            styles.chatAvatar,
          ]}
        />
      );
    case '../assets/avatars/MaximillianJacobson.png':
      return (
        <Image
          source={require('../assets/avatars/MaximillianJacobson.png')}
          style={[
            styles.avatar,
            { width: size, height: size },
            styles.chatAvatar,
          ]}
        />
      );
    case '../assets/avatars/MarthaCraig.png':
      return (
        <Image
          source={require('../assets/avatars/MarthaCraig.png')}
          style={[
            styles.avatar,
            { width: size, height: size },
            styles.chatAvatar,
          ]}
        />
      );
    case '../assets/avatars/TabithaPotter.png':
      return (
        <Image
          source={require('../assets/avatars/TabithaPotter.png')}
          style={[
            styles.avatar,
            { width: size, height: size },
            styles.chatAvatar,
          ]}
        />
      );
    case '../assets/avatars/MaisyHumphrey.png':
      return (
        <Image
          source={require('../assets/avatars/MaisyHumphrey.png')}
          style={[
            styles.avatar,
            { width: size, height: size },
            styles.chatAvatar,
          ]}
        />
      );
    case '../assets/avatars/KieronDotson.png':
      return (
        <Image
          source={require('../assets/avatars/KieronDotson.png')}
          style={[
            styles.avatar,
            { width: size, height: size },
            styles.chatAvatar,
          ]}
        />
      );
    case '../assets/avatars/StatusAvatar.png':
      return (
        <Image
          source={require('../assets/avatars/StatusAvatar.png')}
          style={[
            styles.avatar,
            { width: size, height: size },
            styles.statusAvatar,
          ]}
        />
      );
    default:
      return <View style={[styles.avatar, { width: size, height: size }]} />;
  }
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 26,
  },
  chatAvatar: {
    marginLeft: 16,
    marginRight: 12,
  },
  statusAvatar: {
    marginLeft: 13,
    marginRight: 9,
  },
});
