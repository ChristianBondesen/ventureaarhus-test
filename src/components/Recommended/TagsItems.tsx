import * as React from 'react';
import { Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const RenderTagItem = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{props.tag.name}</Text>
    </TouchableOpacity>
  );
};

export default RenderTagItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 2,
  },
});
