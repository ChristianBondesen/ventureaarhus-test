import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import * as React from 'react';

const RenderListItem = (props) => {
  const itemSelected = () => {
    alert(props.item.event.excerpt);
  };

  return (
    <ImageBackground
      style={styles.picture}
      source={{ uri: props.item.event.image }}
    >
      <TouchableOpacity style={styles.button} onPress={itemSelected}>
        <Text style={styles.titleText}> {props.item.event.name} </Text>
        <Text style={styles.priceText}>
          Price: {props.item.ticketPriceRange}
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default RenderListItem;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 2,
  },
  titleText: {
    backgroundColor: 'white',
    borderRadius: 5,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
  },
  priceText: {
    backgroundColor: 'white',
    fontStyle: 'italic',
    borderRadius: 5,
  },
  picture: {
    flex: 1,
    margin: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    opacity: 0.7,
  },
});
