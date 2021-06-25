import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import CallItem from './components/CallItem';
import Tabs from './components/Tabs';

import CallPlusIcon from './icons/CallPlusIcon';

export default function Calls() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.tabsContainer}>
          <Text style={{ color: '#007AFF', fontSize: 17 }}>Edit</Text>
          <Tabs />
          <CallPlusIcon />
        </View>
        <ScrollView>
          <CallItem />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 44,
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 44,
    alignItems: 'center',
    paddingHorizontal: 16,
    width: Dimensions.get('window').width,
  },
});
