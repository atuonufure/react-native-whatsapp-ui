import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { Header, MockAvatar, LinkItem } from '../../components';

import { RightArrowIcon } from '../../components/icons';

export default function Settings() {
  return (
    <>
      <Header center="Settings" />
      <ScrollView>
        <TouchableOpacity style={styles.container}>
          <View style={styles.avatar}>
            <MockAvatar avatar="../assets/avatars/StatusAvatar.png" size={58} />
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>Sabohiddin</Text>
            <Text style={styles.status}>
              Digital goodies designer - Pixsellz
            </Text>
          </View>
          <View style={styles.rightArrow}>
            <RightArrowIcon />
          </View>
        </TouchableOpacity>
        <View style={styles.links}>
          <LinkItem icon="Starred" title="Starred Messages" />
          <LinkItem icon="Desktop" title="WhatsApp Web/Desktop" />
        </View>
        <View style={styles.links}>
          <LinkItem icon="Account" title="Account" />
          <LinkItem icon="Chats" title="Chats" />
          <LinkItem icon="Notifications" title="Notifications" />
          <LinkItem icon="Data" title="Data and Storage Usage" />
        </View>
        <View style={styles.links}>
          <LinkItem icon="Help" title="Help" />
          <LinkItem icon="Heart" title="Tell a Friend" />
        </View>
        <Text style={styles.fromFacebook}>WhatsApp from Facebook</Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: 76,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 35,
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
  links: {
    backgroundColor: '#FFFFFF',
    borderColor: '#3c3c4329',
    borderTopWidth: 0.33,
    borderBottomWidth: 0.33,
    marginBottom: 35,
  },
  fromFacebook: {
    textAlign: 'center',
    color: '#8E8E93',
    fontSize: 12,
    marginBottom: 31,
  },
});
