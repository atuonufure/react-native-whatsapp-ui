import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CallIcon from '../icons/CallIcon';
import InfoIcon from '../icons/InfoIcon';

export default function CallItem() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar} />
      </View>
      <View style={styles.userConatiner}>
        <Text style={styles.userName}>Martin Randolph</Text>
        <View style={{ flexDirection: 'row' }}>
          <CallIcon style={{ marginTop: 4 }} />
          <Text style={styles.callType}>outgoing</Text>
        </View>
      </View>
      <View style={styles.dateCOntainer}>
        <Text style={styles.date}>10/13/19</Text>
        <InfoIcon />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF'
  },
  avatarContainer: { width: 68 },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: 'lightgray',
    borderRadius: 20,
    marginLeft: 16,
    marginVertical: 8,
  },
  userConatiner: {
    flexGrow: 1,
    justifyContent: 'center',
    borderBottomColor: '#3C3C434A',
    borderBottomWidth: 0.33,
  },
  userName: { fontSize: 16 },
  callType: { color: '#8E8E93', paddingLeft: 6.5, paddingTop: 1.5 },
  dateCOntainer: {
    width: 103,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: '#3C3C434A',
    borderBottomWidth: 0.33,
  },
  date: { color: '#8E8E93', fontSize: 14, paddingRight: 10 },
});
