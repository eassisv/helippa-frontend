import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import ImagePicker from 'react-native-image-crop-picker';

class ImagePickerBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };
  }

  async chooseImage() {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 200,
        cropping: true,
      });

      this.setState({
        image,
      });
      this.props.onChange(image);
    } catch (e) {}
  }

  render() {
    const {style} = this.props;
    const {image} = this.state;
    const imageSource = image ? {uri: image.path} : null;
    return (
      <TouchableOpacity onPress={() => this.chooseImage()}>
        <ImageBackground source={imageSource} style={[style, styles.default]}>
          {!imageSource && (
            <View style={styles.iconContainer}>
              <Icon name="photo" size={style.height * 0.5} color="#888" />
            </View>
          )}
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Escolha uma imagem</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: 'darkcyan',
    position: 'absolute',
    bottom: 15,
    left: 15,
    paddingVertical: 3,
    paddingHorizontal: 12,
    borderRadius: 2,
    elevation: 3,
  },
  badgeText: {
    color: 'white',
  },
  default: {
    backgroundColor: '#f7f7f7',
    borderRadius: 2,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

ImagePickerBox.propTypes = {
  style: PropTypes.object,
  onChange: PropTypes.func,
};

export default ImagePickerBox;
