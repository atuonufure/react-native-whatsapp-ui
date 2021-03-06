import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  ReadIcon,
  RightArrowIcon,
  SelectIcon,
  VoiceRecordIcon,
  PhotoIcon,
} from '../../components/icons';
import { MockAvatar } from '../../components';

type ChatsItemType = {
  name: string;
  lastMessage: string;
  date: string;
  avatar: string;
  editMode: boolean;
  messageIcon?: string | null;
};

export default function ChatsItem({
  name,
  lastMessage,
  date,
  avatar,
  editMode,
  messageIcon,
}: ChatsItemType) {
  const navigation = useNavigation();

  const editedMessage =
    lastMessage.length > 24
      ? lastMessage.slice(0, 24).trim() + '...'
      : lastMessage;

  return (
    <View style={styles.subContainer}>
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          !editMode && navigation.navigate('Chat', { name, avatar })
        }>
        {editMode && (
          <View style={styles.select}>
            <SelectIcon />
          </View>
        )}
        <View style={styles.avatarPart}>
          <MockAvatar avatar={avatar} size={52} />
        </View>
        <View style={styles.messagePart}>
          <View style={styles.upperMessagePart}>
            <Text style={styles.name}>{name}</Text>
            <Text style={[styles.date, editMode && styles.mr16]}>{date}</Text>
          </View>
          <View style={styles.message}>
            {messageIcon && (
              <View style={styles.mt8}>
                {messageIcon === 'read' && <ReadIcon style={styles.mr2half} />}
                {messageIcon === 'voicerecord' && (
                  <VoiceRecordIcon style={styles.mr5} />
                )}
                {messageIcon === 'photo' && (
                  <PhotoIcon style={styles.mr4half} />
                )}
              </View>
            )}
            <Text style={styles.messageText}>{editedMessage}</Text>
          </View>
        </View>
        {!editMode && (
          <View style={styles.arrowPart}>
            <RightArrowIcon />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: { flex: 1, backgroundColor: '#FFFFFF' },
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    height: 74,
  },
  avatarPart: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowPart: {
    width: 35,
    paddingLeft: 10,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.33,
    borderBottomColor: 'rgba(60, 60, 67, 0.29)',
  },
  messagePart: {
    flexGrow: 1,
    flexDirection: 'column',
    borderBottomWidth: 0.33,
    borderBottomColor: 'rgba(60, 60, 67, 0.29)',
  },
  upperMessagePart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    color: '#8E8E93',
    paddingTop: 10,
    fontSize: 14,
  },
  name: {
    paddingTop: 8,
    fontWeight: 'bold',
    fontSize: 16,
  },
  messageText: {
    fontSize: 14,
    paddingTop: 6,
    color: '#8E8E93',
    width: 200,
  },
  select: {
    justifyContent: 'center',
    marginLeft: 17,
  },
  message: { flexDirection: 'row', alignItems: 'center' },
  mr16: { marginRight: 16 },
  mt8: { marginTop: 8 },
  mr2half: { marginRight: 2.5 },
  mr5: { marginRight: 5 },
  mr4half: { marginRight: 4.5 },
});
