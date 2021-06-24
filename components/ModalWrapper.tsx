import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { setModalWindow } from '../redux/modalSlice';

export default function ModalWrapper() {
  const dispatch = useDispatch();
  const modalType = useSelector((state: any) => state.modal.modalType);

  let modalItems: Array<string> = [];

  switch (modalType) {
    case 'chats':
      modalItems = [
        'Mute',
        'Contact Info',
        'Export Chat',
        'Clear Chat',
        'Delete Chat',
      ];
      break;
    case 'chat':
      modalItems = [
        'Camera',
        'Photo & Video Library',
        'Document',
        'Location',
        'Contact',
      ];
      break;
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {modalItems.map((el, index) => (
          <View
            key={`${el}${index}`}
            style={el !== 'Delete Chat' && styles.border}>
            <TouchableOpacity style={styles.modailItem}>
              <Text
                style={[
                  styles.font20,
                  el !== 'Delete Chat' ? styles.blue : styles.red,
                ]}>
                {el}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={styles.cancel}>
        <TouchableOpacity
          style={styles.cancelItem}
          onPress={() => dispatch(setModalWindow(false))}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#00000060',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  main: {
    width: '90%',
    backgroundColor: '#ECECED',
    borderRadius: 15,
  },
  modailItem: {
    height: 56,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancel: {
    width: '90%',
    height: 57,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginBottom: 44,
    marginTop: 7.5,
  },
  cancelItem: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: { fontSize: 19, fontWeight: 'bold', color: '#007AFF' },
  border: {
    borderBottomColor: '#C6C6C8',
    borderBottomWidth: 1,
  },
  blue: {
    color: '#007AFF',
  },
  red: {
    color: '#FF3B30',
  },
  font20: { fontSize: 20 },
});
