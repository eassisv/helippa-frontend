import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const ButtonIcon = ({ title, writeColor, sizeIcon, sizeFont, fundColor, nameIcon }) 
=> (
  <TouchableOpacity
    style={{
      backgroundColor: fundColor,
      flexDirection: "row",
      borderRadius: 5
    }}
  >
    <Icon
      name={nameIcon}
      style={{ color: writeColor, fontSize: sizeIcon, padding: 5 }}
    />
    <Text style={{ color: writeColor, fontSize: sizeFont, padding: 8 }}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default ButtonIcon;
