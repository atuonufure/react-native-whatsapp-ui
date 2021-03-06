import * as React from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';

import Bio from './components/Bio';
import InfoHeader from './components/InfoHeader';
import NameActions from './components/NameActions';
import LinkItem from '../../components/LinkItem';
import EditContact from './components/EditContact';

export default function ContactInfo() {
  const [edit, setEdit] = React.useState<boolean>(false);

  return (
    <>
      <InfoHeader setEdit={setEdit} edit={edit} />
      {!edit ? (
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.scrollContainer}>
          <Image
            source={require('../../assets/images/ContactInfo.png')}
            style={styles.image}
          />
          <View style={styles.info}>
            <NameActions />
            <Bio />
          </View>
          <View style={styles.linkContainer}>
            <LinkItem icon='Media' title='Media, Links, and Docs' value='12' />
            <LinkItem icon='Starred' title='Starred Messages' value='None' />
            <LinkItem icon='ChatSearch' title='Chat Search' border='false' />
          </View>
          <View style={styles.linkContainer}>
            <LinkItem icon='Mute' title='Mute' value='No' />
          </View>
        </ScrollView>
      ) : (
        <EditContact />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  linkContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    marginTop: 19,
  },
  image: { width: '100%' },
  scrollContainer: { alignItems: 'center' },
  info: {
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
});
