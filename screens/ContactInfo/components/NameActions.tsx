import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Write from '../icons/Write';
import VideoCall from '../icons/VideoCall';
import Call from '../icons/Call';

export default function NameActions() {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.name}>Martha Craig</Text>
        <Text style={styles.phone}>+1 202 555 0181</Text>
      </View>
      <View style={styles.links}>
        <TouchableOpacity style={styles.link}>
          <Write />
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <VideoCall />
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Call />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 66,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.33,
    borderBottomColor: '#3c3c4329',
    marginLeft: 15,
  },
  info: { flex: 1 },
  name: { fontSize: 18, fontWeight: 'bold' },
  phone: { fontSize: 12, color: '#8E8E93' },
  links: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 15,
  },
  link: { marginHorizontal: 6 },
});
