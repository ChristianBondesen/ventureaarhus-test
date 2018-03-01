import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import * as React from 'react';
import * as moment from 'moment';

const RenderListItem = props => {
  const itemSelected = () => {
    alert(props.item.event.excerpt);
  };

  const now = moment(props.item.startDate).format('DD / MM / YYYY - HH:mm');

  const getImage = image => {
    if (image) {
      return image;
    } else {
      return 'https://facebook.github.io/react/logo-og.png';
    }
  };

  return (
    <ImageBackground
      style={styles.picture}
      source={{
        uri: getImage(props.item.event.image),
      }}
    >
      <TouchableOpacity style={styles.button} onPress={itemSelected}>
        <Text style={styles.titleText}>{props.item.event.name}</Text>
        <Text style={styles.priceText}>
          Price: {props.item.ticketPriceRange}
          {'\n'}
          Date: {now}
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
    flexDirection: 'column',
    padding: 45,
    borderRadius: 2,
  },
  titleText: {
    // backgroundColor: 'white',
    borderRadius: 5,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
    textShadowRadius: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
  priceText: {
    color: 'white',
    // backgroundColor: 'white',
    fontStyle: 'italic',
    borderRadius: 5,
    textShadowRadius: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
  picture: {
    flex: 1,
    margin: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    opacity: 1,
  },
});
