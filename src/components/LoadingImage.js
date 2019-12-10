import React from 'react';
import {View, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import LoadingErrorImage from './LoadingErrorImage';
import PropTypes from 'prop-types';

export default class LoadingImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {error: !this.props.source};
  }

  onImageError() {
    this.setState({loading: false, error: true});
  }

  render() {
    const {error} = this.state;
    const {source, width, height} = this.props;
    const styles = createStyles(width, height);
    return (
      <View>
        <View style={styles.placeholder} />
        {error ? (
          <LoadingErrorImage width={width} height={height} />
        ) : (
          <FastImage
            source={{uri: source}}
            resizeMode="stretch"
            style={styles.image}
            onError={() => this.onImageError()}
          />
        )}
      </View>
    );
  }
}

const createStyles = (width, height) =>
  StyleSheet.create({
    image: {
      width,
      height,
      borderRadius: 2,
    },
    placeholder: {
      width,
      height,
      borderRadius: 2,
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: '#eee',
    },
  });

LoadingImage.propTypes = {
  source: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  resizeMethod: PropTypes.string,
  resizeMode: PropTypes.string,
  onLoadStart: PropTypes.func,
  onLoadEnd: PropTypes.func,
};

LoadingImage.defaultProps = {
  source: null,
  width: 300,
  height: 200,
  resizeMethod: 'scale',
  resizeMode: 'stretch',
  onLoadStart: () => {},
  onLoadEnd: () => {},
};
