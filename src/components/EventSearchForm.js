import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {TextInput} from 'react-native-gesture-handler';
import CustomTextInput from './CustomTextInput';

class EventSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Busque por Eventos</Text>
          <View style={styles.inputContainer}>
            <CustomTextInput placeholder="testing" backgroundColor="#f5f5f5" />
          </View>
          <View style={styles.inputContainer}>
            <CustomTextInput placeholder="testing" backgroundColor="#f5f5f5" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 20,
    shadowColor: 'black',
    shadowOpacity: 1.0,
    shadowOffset: {width: 0, height: 5},
    borderRadius: 2,
    elevation: 5,
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#444',
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: 20,
  },
});

export default EventSearchForm;
