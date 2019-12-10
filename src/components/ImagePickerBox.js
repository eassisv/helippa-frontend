import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
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
      console.log('image was');
      console.log(image);

      this.props.onChange(image);
    } catch (e) {}
  }

  render() {
    const {style} = this.props;
    const {image} = this.state;
    const imageSource = image ? {uri: image.path} : null;
    // typeof this.state.image.path === 'string' ? {uri: source} : source;
    return (
      <TouchableOpacity onPress={() => this.chooseImage()}>
        <ImageBackground
          source={imageSource}
          style={{...style, ...styles.default}}
        >
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
    backgroundColor: '#eee',
    borderRadius: 2,
  },
});

ImagePickerBox.propTypes = {
  // source: PropTypes.oneOf([PropTypes.string, PropTypes.func]),
  style: PropTypes.object,
  onChange: PropTypes.func,
};

export default ImagePickerBox;
