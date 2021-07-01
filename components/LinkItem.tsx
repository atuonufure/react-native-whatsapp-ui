import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import MediaIcon from '../screens/ContactInfo/icons/MediaIcon';
import ChatSearchIcon from '../screens/ContactInfo/icons/ChatSearchIcon';
import MuteIcon from '../screens/ContactInfo/icons/MuteIcon';
import { RightArrowIcon, StarredIcon } from './icons';
import DesktopIcon from '../screens/Settings/icons/DesktopIcon';
import AccountIcon from '../screens/Settings/icons/AccountIcon';
import ChatsIcon from '../screens/Settings/icons/ChatsIcon';
import NotificationsIcon from '../screens/Settings/icons/NotificationsIcon';
import DataIcon from '../screens/Settings/icons/DataIcon';
import HelpIcon from '../screens/Settings/icons/HelpIcon';
import HeartIcon from '../screens/Settings/icons/HeartIcon';

type LinkItemType = {
  icon: string;
  title: string;
  value?: string;
  border?: string;
  action?: () => void;
};

export default function LinkItem({
  icon,
  title,
  value,
  border,
  action,
}: LinkItemType) {
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={action}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {icon === 'Media' && <MediaIcon style={styles.icon} />}
          {icon === 'Starred' && <StarredIcon style={styles.icon} />}
          {icon === 'ChatSearch' && <ChatSearchIcon style={styles.icon} />}
          {icon === 'Mute' && <MuteIcon style={styles.icon} />}
          {icon === 'Desktop' && <DesktopIcon style={styles.icon} />}
          {icon === 'Account' && <AccountIcon style={styles.icon} />}
          {icon === 'Chats' && <ChatsIcon style={styles.icon} />}
          {icon === 'Notifications' && (
            <NotificationsIcon style={styles.icon} />
          )}
          {icon === 'Data' && <DataIcon style={styles.icon} />}
          {icon === 'Help' && <HelpIcon style={styles.icon} />}
          {icon === 'Heart' && <HeartIcon style={styles.icon} />}
          <Text style={{ fontSize: 16 }}>{title}</Text>
        </View>
        <View style={styles.link}>
          <Text style={styles.linkText}>{value}</Text>
          <RightArrowIcon style={styles.arrow} />
        </View>
      </TouchableOpacity>
      {border !== 'false' && <View style={styles.border} />}
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginTop: 8,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  container: { flexDirection: 'row', justifyContent: 'space-between' },
  link: { flexDirection: 'row', alignItems: 'center' },
  linkText: { fontSize: 16 },
  arrow: { marginVertical: 17.5, marginRight: 17, marginLeft: 12 },
  border: {
    borderBottomWidth: 0.33,
    marginLeft: 59,
    borderBottomColor: '#3c3c432f',
  },
});
