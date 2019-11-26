import React from "react";
import { View, Image, StatusBar, Alert, AsyncStorage } from "react-native";
import * as Facebook from "expo-facebook";

import styles from "../styles";
import ModalLogo from "../components/ModalLogo";
import FacebookLoginButton from "../components/FacebookLoginButton";

const logo = require("../../assets/logo-e-escrita-transparente-vertical.png");

const clientId = "462747724359304";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: true };
    StatusBar.setBackgroundColor("orange");
  }

  dismissModal = () => {
    StatusBar.setBackgroundColor("darkcyan");
    this.setState({ showModal: false });
  };

  goToHomeScreen = token => {
    // eslint-disable-next-line react/prop-types
    const { navigation } = this.props;
    // eslint-disable-next-line react/prop-types
    navigation.navigate("HomeScreen", { token });
  };

  componentDidMount = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) this.goToHomeScreen(token);
  };

  facebookLogin = async () => {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        clientId,
        {
          permissions: ["public_profile", "email"]
        }
      );
      if (type === "success") {
        await AsyncStorage.setItem("token", token);
        this.goToHomeScreen(token);
      }
    } catch (e) {
      Alert.alert(
        "Ocorreu um erro ao tentar logar, por favor novamente mais tarde"
      );
    }
  };

  render() {
    const { showModal } = this.state;
    return (
      <View style={[styles.container, { backgroundColor: "darkcyan" }]}>
        <ModalLogo visible={showModal} onDismiss={() => this.dismissModal()} />
        <Image source={logo} style={{ width: "50%", height: "50%" }} />
        <View style={{ alignItems: "center", marginTop: "10%" }}>
          <FacebookLoginButton onPress={() => this.facebookLogin()} />
        </View>
      </View>
    );
  }
}
