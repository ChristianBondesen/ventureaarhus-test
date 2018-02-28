import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import * as React from 'react';

const checkForImage = (image) => {
  if (image) {
    return image;
  } else {
    return 'https://facebook.github.io/react/logo-og.png';
  }
};

const RenderListItem = (props) => {
  const itemSelected = () => {
    alert(props.item.event.excerpt);
  };

  return (
    <ImageBackground
      style={styles.picture}
      source={{ uri: checkForImage(props.item.event.image) }}
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
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 2,
  },
  titleText: {
    backgroundColor: 'white',
    borderRadius: 5,
    fontWeight: 'bold',
    color: 'red',
    fontSize: 15,
  },
  priceText: {
    fontStyle: 'italic',
  },
  picture: {
    flex: 1,
    margin: 1,
    backgroundColor: '#1B8057',
  },
});
