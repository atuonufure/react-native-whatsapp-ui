import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Tabs() {
  return (
    <View style={styles.container}>
      <View style={styles.leftTab}>
        <Text style={styles.all}>All</Text>
      </View>
      <View style={styles.rightTab}>
        <Text style={styles.missed}>Missed</Text>
      </View>
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
