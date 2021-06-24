import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { RightArrowIcon } from '../../../components/icons';

export default function EditContact() {
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <View>
          <Text style={styles.nameTitle}>Name</Text>
        </View>
        <View style={styles.input}>
          <TextInput style={styles.font16} value='Martha' />
        </View>
      </View>
      <View style={styles.titleContainer}>
        <View style={[styles.input, styles.ml96]}>
          <TextInput style={styles.font16} value='Craig' />
        </View>
      </View>
      <View style={styles.titleContainer}>
        <View>
          <Text style={[styles.font16, styles.phone]}>Phone</Text>
        </View>
        <View style={styles.input}>
          <TouchableOpacity>
            <View style={styles.country}>
              <Text>New Zealand</Text>
              <RightArrowIcon style={styles.ml16} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <View style={styles.mobileContainer}>
          <Text style={[styles.font16, styles.blue]}>mobile</Text>
          <RightArrowIcon style={styles.ml6} />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.font16}
            value='+1 202 555 0181'
            keyboardType='number-pad'
          />
        </View>
      </View>
      <TouchableOpacity style={styles.link}>
        <Text style={[styles.font16, styles.blue]}>more fields</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <Text style={[styles.font16, styles.red]}>Delete Contact</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingLeft: 16 },
  name: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  nameTitle: { fontSize: 16, fontWeight: 'bold', width: 96 },
  input: {
    flexGrow: 1,
    paddingLeft: 16,
    borderBottomWidth: 0.33,
    borderBottomColor: '#3c3c432f',
    height: '100%',
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  country: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  font16: { fontSize: 16 },
  phone: { fontWeight: 'bold', width: 96 },
  ml16: { marginRight: 16 },
  ml6: { marginLeft: 6 },
  ml96: { marginLeft: 96 },
  mobileContainer: {
    flexDirection: 'row',
    width: 96,
    height: '100%',
    alignItems: 'center',
  },
  blue: { color: '#007AFF' },
  red: { color: '#FF3B30' },
  link: { height: 50, justifyContent: 'center' },
});
