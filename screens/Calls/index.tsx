import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import CallItem from './components/CallItem';
import Tabs from './components/Tabs';

import CallPlusIcon from './icons/CallPlusIcon';

import callsService from '../../service/calls.service';

export type CallType = {
  id: number;
  name: string;
  avatar: string;
  type: string;
  date: string;
};

export default function Calls() {
  const [calls, setCalls] = React.useState<[CallType]>();

  React.useEffect(() => {
    callsService.getCalls().then((data: any) => setCalls(data));
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.tabsContainer}>
          <TouchableOpacity>
            <Text style={{ color: '#007AFF', fontSize: 17 }}>Edit</Text>
          </TouchableOpacity>
          <Tabs />
          <TouchableOpacity>
            <CallPlusIcon />
          </TouchableOpacity>
        </View>
        <ScrollView>
          {calls &&
            calls.length > 0 &&
            calls.map((el: CallType) => <CallItem key={el.id} call={el} />)}
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
