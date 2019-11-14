import React from "react";
import { Alert, View, Image, TextInput, Button, StatusBar } from "react-native";

import Styles from "../styles";
import ModalLogo from "../components/ModalLogo";

const logo = require("../../assets/logo-e-escrita-transparente-vertical.png");

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
      email: "",
      password: ""
    };
  }

  onLogin() {
    const { email, password } = this.state;

    Alert.alert("Credentials", `${email} + ${password}`);
  }

  dismissModal() {
    StatusBar.setBackgroundColor("darkcyan");
    this.setState({ showModal: false });
  }

  render() {
    const { email, password, showModal } = this.state;
    return (
      <View style={Styles.darkcyanContainer}>
        <ModalLogo visible={showModal} onDismiss={() => this.dismissModal()} />
        <Image source={logo} style={Styles.logo} />
        <View style={{ flex: 3 }}>
          <TextInput
            value={email}
            onChangeText={input => this.setState({ email: input })}
            placeholder="Email"
            style={Styles.input}
          />
          <TextInput
            value={password}
            onChangeText={input => this.setState({ password: input })}
            placeholder="Password"
            secureTextEntry
            style={Styles.input}
          />
          <Button
            title="Login"
            style={Styles.input}
            onPress={() => this.onLogin()}
          />
        </View>
      </View>
    );
  }
}
