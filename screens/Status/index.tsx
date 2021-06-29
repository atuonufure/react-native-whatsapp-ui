import * as React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

import { Header, MockAvatar } from '../../components';

import CameraButtonIcon from './icons/CameraButtonIcon';
import EditButtonIcon from './icons/EditButtonIcon';

import { navigationType } from '../../types';

export default function Status({ navigation }: navigationType) {
  return (
    <View style={styles.flex}>
      <Header left="Privacy" center="Status" />
      <View style={styles.container}>
        <View style={styles.statusContainer}>
          <View style={styles.statusAvatar}>
            <MockAvatar avatar="../assets/avatars/StatusAvatar.png" size={58} />
          </View>
          <View style={styles.flexGrow}>
            <Text style={styles.status}>My Status</Text>
            <Text style={styles.addStatus}>Add to my status</Text>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity>
              <CameraButtonIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TypeStatus')}>
              <EditButtonIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.recentContainer}>
          <Text style={styles.noRecent}>
            No recent updates to show right now.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  flexGrow: { flexGrow: 1 },
  container: {
    backgroundColor: '#EFEFF4',
    flexGrow: 1,
  },
  statusContainer: {
    backgroundColor: '#FFFFFF',
    height: 76,
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 35,
    flexDirection: 'row',
  },
  status: { fontSize: 16, fontWeight: 'bold' },
  addStatus: { color: '#8E8E93' },
  buttons: {
    width: 88,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 16,
  },
  recentContainer: {
    backgroundColor: '#FFFFFF',
    height: 43,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noRecent: { color: '#8E8E93', fontSize: 14 },
  statusAvatar: { marginLeft: 13, marginRight: 9 },
});
