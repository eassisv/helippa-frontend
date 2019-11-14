import React from "react";
import { Alert, View, Image, TextInput, Button } from "react-native";

import ModalLogo from "../components/ModalLogo";
import Styles from "../styles";

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
    const { username, password } = this.state;

    Alert.alert("Credentials", `${username} + ${password}`);
  }

  render() {
    const { showModal } = this.state;
    return (
      <View style={Styles.darkcyanContainer}>
        <ModalLogo
          visible={showModal}
          onDismiss={() => this.setState({ showModal: false })}
        />
        <Image source={logo} style={Styles.logo} />
        <View style={{ flex: 3 }}>
          <TextInput
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="Email"
            style={Styles.input}
          />
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder="Password"
            secureTextEntry
            style={Styles.input}
          />
          <Button
            title="Login"
            style={Styles.input}
            onPress={this.onLogin.bind(this)}
          />
        </View>
      </View>
    );
  }
}
