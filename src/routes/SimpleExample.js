import React from 'react';
import {Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.openDrawer()}
        title="Go back home"
      />
    );
  }
}

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

export default createAppContainer(MyDrawerNavigator);
