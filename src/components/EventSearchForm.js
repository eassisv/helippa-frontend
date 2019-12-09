import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

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
    color: '#333',
    textAlign: 'center',
  },
});

export default EventSearchForm;
