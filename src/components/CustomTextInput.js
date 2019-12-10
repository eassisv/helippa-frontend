import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

// const CustomTextInput = ({name, textColor, fundColor, Height, Width, sizeIcon, nameIcon})
// => (
//   <View
//     style={{
//       backgroundColor: fundColor,
//       height: Height,
//       width: Width,
//       borderRadius: 10
//     }}
//   >
//     <Input
//       placeholder={name}
//       placeholderTextColor={textColor}
//       rightIcon={<Icon name={nameIcon} size={sizeIcon} color={textColor} />}
//     />
//   </View>
// );

const CustomTextInput = props => {
  const styles = createStyle(props);
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      placeholderTextColor={props.textColor}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
};

const createStyle = ({name, textColor, backgroundColor, padding, style}) =>
  StyleSheet.create({
    input: {
      backgroundColor: backgroundColor,
      paddingHorizontal: 12,
      paddingVertical: 8,
      color: textColor,
      borderRadius: 2,
      ...style,
    },
  });

CustomTextInput.propTypes = {
  name: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  padding: PropTypes.number,
  placeholder: PropTypes.string,
  style: PropTypes.object,
};

CustomTextInput.defaultProps = {
  textColor: '#333',
  backgroundColor: 'white',
};

export default CustomTextInput;
