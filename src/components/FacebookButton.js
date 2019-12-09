import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

const FacebookButton = ({onPress, loading}) => {
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator color="#3b5998" size="small" />
      ) : (
        <Icon.Button
          size={30}
          color="#3b5998"
          name="facebook-official"
          backgroundColor="#fff"
          borderRadius={2}
          style={styles.button}
          onPress={() => onPress()}
        >
          <Text style={styles.title}>Entrar com o Facebook</Text>
        </Icon.Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 240,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 3,
    borderRadius: 2,
  },
  button: {
    height: 40,
    width: 240,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: '#3b5998',
  },
});

FacebookButton.propTypes = {
  onPress: PropTypes.func,
  loading: PropTypes.bool,
};

FacebookButton.defaultTypes = {
  onPress: () => {},
  loading: false,
};

export default FacebookButton;
