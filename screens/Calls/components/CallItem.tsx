import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { MockAvatar } from '../../../components';

import CallIcon from '../icons/CallIcon';
import InfoIcon from '../icons/InfoIcon';

import { CallType } from '..';

type CallItemType = {
  call: CallType;
};

export default function CallItem({ call }: CallItemType) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <MockAvatar avatar={call.avatar} size={40} />
      </View>
      <View style={styles.userConatiner}>
        <Text style={styles.userName}>{call.name}</Text>
        <View style={{ flexDirection: 'row' }}>
          <CallIcon style={{ marginTop: 4 }} />
          <Text style={styles.callType}>{call.type}</Text>
        </View>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{call.date}</Text>
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
    backgroundColor: '#FFFFFF',
  },
  avatarContainer: { width: 68 },
  userConatiner: {
    flexGrow: 1,
    justifyContent: 'center',
    borderBottomColor: '#3C3C434A',
    borderBottomWidth: 0.33,
  },
  userName: { fontSize: 16 },
  callType: { color: '#8E8E93', paddingLeft: 6.5, paddingTop: 1.5 },
  dateContainer: {
    width: 103,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: '#3C3C434A',
    borderBottomWidth: 0.33,
    justifyContent: 'space-between',
    paddingRight: 17,
  },
  date: { color: '#8E8E93', fontSize: 14, paddingRight: 10 },
});
