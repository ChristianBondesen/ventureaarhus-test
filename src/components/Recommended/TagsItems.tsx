import * as React from 'react';
import { Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const RenderTagItem = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.tagNameText}>{props.tag.name}</Text>
    </TouchableOpacity>
  );
};

export default RenderTagItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1B8057',
    borderRadius: 3,
    margin: 1,
  },
  tagNameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textShadowRadius: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {
      width: -2,
      height: 2,
    },
  },
});
