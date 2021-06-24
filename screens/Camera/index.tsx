import * as React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Cancel from './icons/Cancel';
import Light from './icons/Light';
import Gallery from './icons/Gallery';
import TakePhoto from './icons/TakePhoto';
import ChangeCamera from './icons/ChangeCamera';

export default function Camera() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={[styles.bar, styles.topBar]}>
        <TouchableOpacity onPress={() => navigation.navigate('Chats')}>
          <Cancel style={styles.cancel} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Light style={styles.light} />
        </TouchableOpacity>
      </View>
      <View style={styles.cameraView}>
        <Image
          style={styles.camera}
          source={require('../../assets/camera/cameraView.png')}
        />
      </View>
      <View style={styles.bar}>
        <View style={styles.cameraButtons}>
          <Gallery style={styles.gallery} />
          <TakePhoto />
          <ChangeCamera style={styles.changeCamera} />
        </View>
        <Text style={styles.holdForVideo}>Hold for video, tap for photo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  bar: { height: 73, width: '100%', backgroundColor: '#000000' },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 35,
  },
  cancel: {
    marginLeft: 19.5,
  },
  light: {
    marginRight: 11,
  },
  cameraView: { width: '100%' },
  camera: { width: '100%' },
  cameraButtons: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: -77,
    alignItems: 'center',
  },
  gallery: { marginLeft: 11.75 },
  changeCamera: { marginRight: 10.25 },
  holdForVideo: { color: '#FFFFFF', textAlign: 'center' },
});
