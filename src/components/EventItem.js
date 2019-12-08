import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import LoadingErrorImage from './LoadingErrorImage';
import PropTypes from 'prop-types';

export default class EventItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true, error: false};
  }

  setLoadingOff() {
    this.setState({loading: false});
  }

  setErrorTrue() {
    this.setState({error: true, loading: false});
  }

  render() {
    const {loading, error} = this.state;
    const {image, title, width, height, fontSize, onPress} = this.props;
    const styles = createStyle(width, height, fontSize);

    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View>
          {!error ? (
            <FastImage
              source={{uri: image}}
              style={styles.image}
              onLoadEnd={() => this.setLoadingOff()}
              onError={() => this.setErrorTrue()}
            />
          ) : (
            <LoadingErrorImage
              style={styles.image}
              width={width}
              height={height}
            />
          )}
          {loading || !image ? <View style={styles.imagePlaceholder} /> : null}
        </View>
        <View style={styles.titleWrapper}>
          {loading || !image ? (
            <View style={styles.textPlaceholder} />
          ) : (
            <Text style={styles.title}>{title}</Text>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

const createStyle = (width, height, fontSize) =>
  StyleSheet.create({
    container: {
      width,
      margin: 10,
    },
    image: {
      width,
      height,
      borderRadius: 2,
    },
    imagePlaceholder: {
      width,
      height,
      borderRadius: 2,
      backgroundColor: '#f1f1f1',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    title: {
      fontSize,
      color: '#777',
    },
    titleWrapper: {
      width: '100%',
      marginTop: 10,
    },
    textPlaceholder: {
      height: fontSize + 2,
      width: '80%',
      backgroundColor: '#f1f1f1',
    },
  });

EventItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  onPress: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.number,
};

EventItem.defaultProps = {
  image: null,
  title: '',
  onPress: () => {},
  width: 300,
  height: 200,
  fontSize: 16,
};
