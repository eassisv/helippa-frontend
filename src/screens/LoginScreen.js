import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';
import FastImage from 'react-native-fast-image';
import FacebookButton from '../components/FacebookButton';
import ModalLogo from '../components/ModalLogo';
import axios from 'axios';

const url = require('../../backendroute').default.baseUrl;
const logo = require('../../assets/logo-e-escrita-transparente-vertical.png');

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false, loading: false, loadingScreen: true};
  }

  navigateToHome() {
    this.props.navigation.navigate('MainNavigator');
  }

  setModal() {
    const showModal = this.props.navigation.getParam('showModal', true);
    this.setState({showModal, loadingScreen: false});
    StatusBar.setBackgroundColor(showModal ? 'orange' : 'darkcyan', false);
  }

  async componentDidMount() {
    try {
      const fbToken = await AsyncStorage.getItem('fbToken');
      const apiToken = await AsyncStorage.getItem('apiToken');
      if (fbToken && apiToken) {
        this.navigateToHome();
      } else {
        this.setModal();
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
        res = await axios.post(
          `${url}api/authenticate`,
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
        } catch (error) {}
      }
    } catch (error) {
      Alert.alert(
        'Erro ao tentar logar',
        'Talvez você esteja sem conexão com a internet',
      );
      this.setState({loading: false});
    }
  }

  onDismissModal() {
    this.setState({showModal: false});
    StatusBar.setBackgroundColor('darkcyan', false);
  }
  render() {
    const {showModal, loading, loadingScreen} = this.state;
    return (
      <View style={styles.container}>
        <ModalLogo
          visible={showModal}
          onDismiss={() => this.onDismissModal()}
        />
        {loadingScreen ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <>
            <FastImage source={logo} style={styles.logo} resizeMode="contain" />
            <FacebookButton
              loading={loading}
              onPress={() => this.loginWithFacebook()}
            />
          </>
        )}
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
