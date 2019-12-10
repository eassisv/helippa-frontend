import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {LoginManager} from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';

export default class LogoutScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Sair',
  };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await AsyncStorage.multiRemove(['fbToken', 'apiToken']);
    await LoginManager.logOut();
    this.props.navigation.navigate('LoginScreen', {showModal: false});
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="darkcyan" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
