/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React, { Component } from "react";
import { Text, View, Dimensions } from "react-native";
import axios from "axios";

const { width } = Dimensions.get("window");

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      picture: "",
      token: ""
    };
  }

  componentDidMount = async () => {
    const { navigation } = this.props;
    const token = navigation.getParam("token", "");
    if (token) {
      try {
        let res = await axios.get("https://graph.facebook.com/v5.0/me", {
          params: {
            access_token: token,
            fields: "name,email"
          }
        });
        const { name, email } = res.data;
        res = await axios.get("https://graph.facebook.com/v5.0/me/picture", {
          params: { access_token: token, width }
        });
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    const { token } = this.state;
    return (
      <View>
        <Text> {token} </Text>
      </View>
    );
  }
}
