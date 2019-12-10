import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import CustomTextInput from './CustomTextInput';
import LoadingButton from './LoadingButton';

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
            <CustomTextInput
              placeholder="Nome do evento"
              backgroundColor="#ebebeb"
            />
          </View>
          <View style={styles.inputContainer}>
            <CustomTextInput
              placeholder="Data do evento"
              backgroundColor="#ebebeb"
            />
          </View>
          <LoadingButton style={styles.buttonSyle}>BUSCAR</LoadingButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 2,
    elevation: 3,
  },
  container: {
    width: '100%',
    padding: 15,
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
  buttonSyle: {
    backgroundColor: 'darkcyan',
    borderRadius: 2,
    marginTop: 20,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
});

export default EventSearchForm;
