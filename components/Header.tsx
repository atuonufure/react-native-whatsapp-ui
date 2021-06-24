import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type HeaderType = {
  left?: string;
  center?: string;
  right?: string | JSX.Element;
  action?: () => void;
  editMode?: boolean;
};

export default function Header({
  left,
  center,
  right,
  action,
  editMode,
}: HeaderType) {
  return (
    <View style={styles.container}>
      {!editMode ? (
        <>
          <TouchableOpacity style={styles.leftLink} onPress={action}>
            {left && <Text style={styles.left}>{left}</Text>}
          </TouchableOpacity>
          <View style={styles.header}>
            <Text style={styles.center}>{center}</Text>
          </View>
          <TouchableOpacity style={styles.rightLink} onPress={action}>
            {right && <Text style={styles.right}>{right}</Text>}
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity onPress={action}>
            <View>
              <Text style={styles.done}>Done</Text>
            </View>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 44,
    height: 44,
  },
  left: {
    alignSelf: 'flex-start',
    paddingLeft: 12,
    color: '#007AFF',
    fontSize: 17,
  },
  right: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    color: '#D1D1D6',
    paddingRight: 16,
    fontSize: 17,
  },
  center: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
  leftLink: {
    flexBasis: '23%',
  },
  rightLink: {
    flexBasis: '23%',
  },
  header: {
    flexBasis: '54%',
  },
  done: {
    color: '#007AFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 16,
  },
});
