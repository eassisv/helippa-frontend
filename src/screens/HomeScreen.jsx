/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React, { Component } from "react";
import {
  Alert,
  Text,
  View,
  Dimensions,
  Image,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import axios from "axios";

const { width } = Dimensions.get("window");

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      picture: {},
      token: "",
      loadingImage: true
    };
    StatusBar.setBackgroundColor("darkcyan");
  }

  componentDidMount = async () => {
    const { navigation } = this.props;
    const token = navigation.getParam("token", "");
    if (token) {
      try {
        const res = await axios.get("https://graph.facebook.com/v5.0/me", {
          params: {
            access_token: token,
            fields: `name,email,picture.width(${width})`
          }
        });
        const { id, name, email, picture } = res.data;

        this.setState({
          name,
          email,
          token,
          picture: picture.data
        });
      } catch (error) {
        Alert.alert(
          "Erro ao acessar informações do usuário, tente novamente mais tarde."
        );
        navigation.navigate("LoginScreen");
      }
    }
  };

  logOut = async () => {
    const { navigation } = this.props;
    await AsyncStorage.removeItem("token");
    navigation.navigate("LoginScreen", { showModal: false });
  };

  render() {
    const { name, email, picture, loadingImage } = this.state;

    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View
          style={{
            width,
            height: width,
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: "3%"
          }}
        >
          <ActivityIndicator
            size="large"
            color="cyan"
            style={{ position: "absolute", top: "50%" }}
          />
          <Image
            source={{ uri: picture.url }}
            resizeMethod="scale"
            resizeMode="contain"
            style={{
              width: "80%",
              height: "80%",
              borderRadius: 20
            }}
            // // onLoadStart={() => {
            // //   this.setState({ loadingImage: true });
            // // }}
            // onLoadEnd={() => {
            //   this.setState({ loadingImage: false });
            // }}
          />
        </View>
        <Text style={{ color: "darkcyan", fontSize: 16, fontWeight: "600" }}>
          {name}
        </Text>
        <Text style={{ color: "darkcyan" }}>{email}</Text>
        <TouchableOpacity
          style={{ marginTop: "15%" }}
          onPress={() => this.logOut()}
        >
          <Text style={{ color: "crimson" }}>Sair</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
