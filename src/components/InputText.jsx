import React from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const InputText = ({name, textColor, fundColor, Height, Width, sizeIcon, nameIcon}) 
=> (
  <View
    style={{
      backgroundColor: fundColor,
      height: Height,
      width: Width,
      borderRadius: 10
    }}
  >
    <Input
      placeholder={name}
      placeholderTextColor={textColor}
      rightIcon={<Icon name={nameIcon} size={sizeIcon} color={textColor} />}
    />
  </View>
);

export default InputText;