import React, {Component} from 'react';
import {Animated} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import PropTypes from 'prop-types';

export default class JumpingIcon extends Component {
  render() {
    const {name, size, color} = this.props;
    return (
      <Animated.View>
        <MaterialCommunityIcons name={name} size={size} color={color} />
      </Animated.View>
    );
  }
}

JumpingIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

JumpingIcon.defaultProps = {
  size: 32,
  color: 'black',
};
