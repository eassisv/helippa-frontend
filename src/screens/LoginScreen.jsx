/* eslint-disable react/prop-types */
import React from "react";
import {
  View,
  Image,
  StatusBar,
  Alert,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import * as Facebook from "expo-facebook";
import axios from "axios";

import styles from "../styles";
import ModalLogo from "../components/ModalLogo";
import FacebookButton from "../components/FacebookButton";

const logo = require("../../assets/logo-e-escrita-transparente-vertical.png");

const clientId = "462747724359304";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const showModal = navigation.getParam("showModal", true);
    StatusBar.setBackgroundColor(showModal ? "orange" : "darkcyan");
    this.state = { showModal, loading: false };
  }

  dismissModal = () => {
    StatusBar.setBackgroundColor("darkcyan");
    this.setState({ showModal: false });
  };

  goToHomeScreen = (fbtoken, apitoken) => {
    // eslint-disable-next-line react/prop-types
    const { navigation } = this.props;
    // eslint-disable-next-line react/prop-types
    navigation.navigate("HomeScreen", { fbtoken, apitoken });
  };

  componentDidMount = async () => {
    try {
      const { fbtoken } = await AsyncStorage.getItem("fbtoken");
      // const { apitoken } = await AsyncStorage.getItem("apitoken");
      // console.log(fbtoken, apitoken);
      // eslint-disable-next-line no-empty
      if (fbtoken) {
        this.goToHomeScreen(fbtoken);
      }
    } catch (error) {}
  };

  facebookLogin = async () => {
    this.setState({ loading: true });
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        clientId,
        {
          permissions: ["public_profile", "email"]
        }
      );
      if (type === "success") {
        // try {
        // console.log("fbtoken:", token);

        // const res = await fetch("http://5b7fd052.ngrok.io/api/authenticate", {
        //   method: "POST",
        //   body: JSON.stringify({ fbtoken: token })
        // });

        // console.log("res:", res);

        // await AsyncStorage.multiSet([
        //   ["fbtoken", token],
        //   ["apitoken", apitoken]
        // ]);
        await AsyncStorage.setItem("fbtoken", token);
        this.goToHomeScreen(token);
        // } catch (e) {
        //   console.log("api:", e);
        // }
      }
    } catch (e) {
      this.setState({ loading: false });
      Alert.alert(
        "Ocorreu um erro ao tentar logar, por favor novamente mais tarde"
      );
    }
  };

  render() {
    const { showModal, loading } = this.state;
    return (
      <View style={[styles.container, { backgroundColor: "darkcyan" }]}>
        <ModalLogo visible={showModal} onDismiss={() => this.dismissModal()} />
        <Image
          source={logo}
          resizeMethod="scale"
          resizeMode="contain"
          style={{ width: "50%", height: "50%" }}
        />
        <View style={{ alignItems: "center", marginTop: "10%" }}>
          {loading ? (
            <ActivityIndicator size="large" color="cyan" />
          ) : (
            <FacebookButton onPress={() => this.facebookLogin()} />
          )}
        </View>
      </View>
    );
  }
}
