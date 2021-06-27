import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Header, MockAvatar } from '../../components';
import { RightArrowIcon } from '../../components/icons';

export default function Settings() {
  return (
    <>
      <Header center='Settings' />
      <TouchableOpacity style={styles.container}>
        <View style={styles.avatar}>
          <MockAvatar avatar='../assets/avatars/StatusAvatar.png' size={58} />
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>Sabohiddin</Text>
          <Text style={styles.status}>Digital goodies designer - Pixsellz</Text>
        </View>
        <View style={styles.rightArrow}>
          <RightArrowIcon />
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: 76,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginTop: 8,
    marginBottom: 10,
    paddingLeft: 16,
    paddingRight: 12,
  },
  info: { justifyContent: 'center', flexGrow: 1 },
  name: { fontSize: 20 },
  status: { fontSize: 16, color: '#3C3C4399' },
  rightArrow: { width: 24 },
});
