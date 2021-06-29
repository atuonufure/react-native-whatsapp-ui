import React from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

import CancelIcon from './icons/CancelIcon';
import PaleteIcon from './icons/PaleteIcon';
import TextIcon from './icons/TextIcon';

import { navigationType } from '../../types';

export default function TypeStatus({ navigation }: navigationType) {
  const [value, setValue] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Status')}>
          <CancelIcon />
        </TouchableOpacity>
        <View style={styles.rightButtons}>
          <TouchableOpacity>
            <TextIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.palete}>
            <PaleteIcon />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChange={e => setValue(e.target.value)}
          style={styles.input}
          placeholderTextColor="#FFFFFF40"
          placeholder="Type a status"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FF8A8C', paddingHorizontal: 18 },
  header: {
    marginTop: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightButtons: {
    flexDirection: 'row',
  },
  palete: { marginLeft: 30 },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 44,
  },
  input: { width: 242, height: 49, fontSize: 38, textAlign: 'center' },
});
