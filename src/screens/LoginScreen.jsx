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

const instance = axios.create({
  baseURL: "http://5b7fd052.ngrok.io/"
  // baseURL: "http://backend-helippa.herokuapp.com/",
});

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
      const fbtoken = await AsyncStorage.getItem("fbtoken");
      const apitoken = await AsyncStorage.getItem("apitoken");
      // console.log(fbtoken, apitoken);
      // eslint-disable-next-line no-empty

      console.log(fbtoken, " ", apitoken);
      if (!!fbtoken && !!apitoken) {
        this.goToHomeScreen(fbtoken, apitoken);
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
        try {
          const res = await instance.post(
            "api/authenticate/",
            { fbtoken: token },
            { headers: { fbtoken: token } }
          );

          const apitoken = res.data.token;

          console.log("blabla", token, " ", apitoken);

          await AsyncStorage.setItem("fbtoken", token);
          await AsyncStorage.setItem("apitoken", apitoken);
          this.goToHomeScreen(token, apitoken);
        } catch (error) {
          Alert.alert(
            "Erro ao autenticar com a API, por favor tente novamente mais tarde"
          );
        }
      }
    } catch (e) {
      this.setState({ loading: false });
      Alert.alert(
        "Ocorreu um erro ao tentar logar, por favor tente novamente mais tarde"
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
