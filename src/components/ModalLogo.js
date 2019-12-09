import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

const {width, height} = Dimensions.get('window');
const logo = require('../../assets/logo-e-escrita-transparente-vertical.png');

const ModalLogo = ({visible, onDismiss}) => {
  return (
    <Modal
      isVisible={visible}
      swipeDirection="up"
      backdropOpacity={1}
      backdropColor="orange"
      animationInTiming={0}
      animationOut="slideOutUp"
      onSwipeComplete={() => onDismiss()}
      style={styles.modalContainer}
    >
      <View style={styles.container}>
        <Image
          source={logo}
          style={styles.image}
          resizeMode="contain"
          resizeMethod="scale"
        />
        <Text style={styles.slogan}>
          O conhecimento muda o mundo e queremos oferecer a mudança
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => onDismiss()}>
          <Icon name="angle-double-up" size={36} color="#fff" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  slogan: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#4444',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    paddingHorizontal: '5%',
    marginBottom: '15%',
  },
  image: {
    width: '50%',
    height: '50%',
    marginBottom: '10%',
  },
  button: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

ModalLogo.propTypes = {
  visible: PropTypes.bool,
  onDismiss: PropTypes.func,
};

ModalLogo.defaultProps = {
  visible: false,
  onDismiss: () => {},
};

export default ModalLogo;
