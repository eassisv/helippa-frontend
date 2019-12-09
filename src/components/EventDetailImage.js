import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';

const {width} = Dimensions.get('window');
const height = Math.round(width * (2 / 3));

export default class EventDetailImage extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: true, imageError: false};
  }

  setLoadingFalse() {
    this.setState({loading: false});
  }

  setImageErrorTrue() {
    this.setState({imageError: true, loading: false});
  }

  render() {
    const {image, title} = this.props.event;
    return (
      <View>
        <ImageBackground
          source={{uri: image}}
          style={styles.imageContainer}
          resizeMode="stretch"
        >
          <View style={styles.titleWrapper}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              {title}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    width,
    height,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
    maxWidth: '80%',
    color: '#fefefe',
    padding: 5,
  },
  titleWrapper: {
    width: '100%',
    backgroundColor: '#4448',
    alignItems: 'center',
    position: 'absolute',
    marginTop: 10,
    bottom: '10%',
  },
});
