import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

const LoadingErrorImage = ({width, height}) => {
  const styles = createStyle(width, height);
  return (
    <View style={styles.container}>
      <Icon name="image" size={Math.round(height * 0.5)} color="#444" />
    </View>
  );
};

const createStyle = (width, height) =>
  StyleSheet.create({
    container: {
      width,
      height,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f1f1f1',
    },
  });

LoadingErrorImage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

LoadingErrorImage.defaultProps = {
  width: 300,
  height: 200,
};

export default LoadingErrorImage;
