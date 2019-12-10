import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const logo = require('../../assets/escrita-darkcyan.png');

const HomeHeader = ({onPressLogo, onPressMenu}) => {
  console.log(onPressMenu);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoWrapper} onPress={onPressLogo}>
        <Image source={logo} style={styles.logo} resizeMode="cover" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconWrapper} onPress={onPressMenu}>
        <Icon name="navicon" size={34} color="#444" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
  },
  logo: {
    height: 40,
    width: 90,
  },
  logoWrapper: {
    padding: 5,
    marginLeft: 5,
  },
  iconWrapper: {
    padding: 5,
    marginRight: 10,
  },
});

export default HomeHeader;
