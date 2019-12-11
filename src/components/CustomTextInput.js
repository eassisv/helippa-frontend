import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import PropTypes from 'prop-types';

const CustomTextInput = props => {
  const styles = createStyle(props);
  return (
    <TextInput
      style={[styles.input, props.style]}
      placeholder={props.placeholder}
      placeholderTextColor={props.textColor}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
};

const createStyle = ({textColor, backgroundColor}) =>
  StyleSheet.create({
    input: {
      backgroundColor: backgroundColor,
      paddingHorizontal: 12,
      paddingVertical: 8,
      color: textColor,
      borderRadius: 2,
    },
  });

CustomTextInput.propTypes = {
  value: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
};

CustomTextInput.defaultProps = {
  value: '',
  textColor: '#333',
  backgroundColor: 'white',
  placeholder: '',
  style: {},
};

export default CustomTextInput;
