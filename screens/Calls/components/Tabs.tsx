import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Tabs() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftTab}>
        <Text style={styles.all}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rightTab}>
        <Text style={styles.missed}>Missed</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row' },
  leftTab: {
    backgroundColor: '#007AFF',
    height: 26,
    width: 76,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderWidth: 1,
    borderColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  all: { color: '#FFFFFF', fontSize: 13 },
  rightTab: {
    height: 26,
    width: 76,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 1,
    borderColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  missed: { color: '#007AFF', fontSize: 13 },
});
