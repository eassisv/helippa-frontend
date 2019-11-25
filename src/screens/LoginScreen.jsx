import React from "react";
import { View, Image, StatusBar } from "react-native";

import styles from "../styles";
import ModalLogo from "../components/ModalLogo";
import FacebookLoginButton from "../components/FacebookLoginButton";

const logo = require("../../assets/logo-e-escrita-transparente-vertical.png");

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    StatusBar.setBackgroundColor("orange");
  }

  dismissModal() {
    StatusBar.setBackgroundColor("darkcyan");
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: "darkcyan", borderWidth: 1, borderColor: "red" }
        ]}
      >
        <ModalLogo visible={showModal} onDismiss={() => this.dismissModal()} />
        <Image source={logo} style={{ width: "50%", height: "50%" }} />
        <View style={{ width: "80%" }}>
          <FacebookLoginButton />
        </View>
      </View>
    );
  }
}
