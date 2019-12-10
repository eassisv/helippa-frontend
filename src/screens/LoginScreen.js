import React from 'react';
import {View, StyleSheet, StatusBar, Alert} from 'react-native';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';
import FastImage from 'react-native-fast-image';
import FacebookButton from '../components/FacebookButton';
import ModalLogo from '../components/ModalLogo';
import axios from 'axios';

const logo = require('../../assets/logo-e-escrita-transparente-vertical.png');

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    const showModal = this.props.navigation.getParam('showModal', false);
    this.state = {showModal, loading: false};
    StatusBar.setBackgroundColor(showModal ? 'orange' : 'darkcyan', false);
  }

  navigateToHome() {
    this.props.navigation.navigate('MainNavigator');
  }

  async componentDidMount() {
    try {
      const fbToken = await AsyncStorage.getItem('fbToken');
      const apiToken = await AsyncStorage.getItem('apiToken');
      console.log('fbToken:', fbToken);
      console.log('apiToken:', apiToken);
      if (fbToken && apiToken) {
        this.navigateToHome();
      }
    } catch (error) {}
  }

  async loginWithFacebook() {
    this.setState({loading: true});
    let res;
    try {
      res = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (!res.isCancelled) {
        const fbToken = await AccessToken.getCurrentAccessToken();
        try {
          res = await axios.post(
            'http://b44087f3.ngrok.io/api/authenticate',
            {},
            {headers: {fbToken: fbToken.accessToken}},
          );
          const apiToken = res.data.token;
          try {
            await AsyncStorage.multiSet([
              ['fbToken', fbToken.accessToken],
              ['apiToken', apiToken],
            ]);
            this.navigateToHome();
          } catch (error) {
            // TODO: ver uma mensagem para mostrar ao usuário
          }
        } catch (error) {
          // TODO
        }
      }
    } catch (error) {
      Alert.alert('Erro ao logar', error);
    }
    this.setState({loading: false});
  }

  onDismissModal() {
    this.setState({showModal: false});
    StatusBar.setBackgroundColor('darkcyan', false);
  }
  //TODO tratar o erro do login sem internet
  render() {
    const {showModal, loading} = this.state;
    return (
      <View style={styles.container}>
        <ModalLogo
          visible={showModal}
          onDismiss={() => this.onDismissModal()}
        />
        <FastImage source={logo} style={styles.logo} resizeMode="contain" />
        <FacebookButton
          loading={loading}
          onPress={() => this.loginWithFacebook()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkcyan',
    paddingBottom: '10%',
  },
  logo: {
    width: '50%',
    height: '50%',
    marginBottom: 40,
  },
});
