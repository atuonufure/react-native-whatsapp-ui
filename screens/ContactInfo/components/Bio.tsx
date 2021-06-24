import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Bio() {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Design adds value faster, than it adds cost
      </Text>
      <Text style={styles.date}>Dec 18, 2018</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  description: { fontSize: 14, marginVertical: 3.5 },
  date: { color: '#8E8E93', fontSize: 12, marginVertical: 3.5 },
});
