import React from "react";
import { View } from "react-native";
import ModalLogo from "../components/ModalLogo";

const ModalLogoScreen = ({ navigation }) => {
  return (
    <View>
      <ModalLogo visible onDismiss={() => navigation.navigate("BeforeLogin")} />
    </View>
  );
};

export default ModalLogoScreen;
