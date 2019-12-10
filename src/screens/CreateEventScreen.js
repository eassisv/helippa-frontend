import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import LoadingButton from '../components/LoadingButton';
import ImagePicker from 'react-native-image-crop-picker';

class CreateEventScreen extends React.Component {
  constructor({navigation}) {
    super({navigation});
    this.state = {
      showDatePicker: false,
      date: new Date(),
      name: '',
      description: '',
      mode: 'date',
      image: '',
    };
  }

  dateString() {
    return `${this.state.date.toLocaleDateString()} ${this.state.date.toLocaleTimeString()}`;
    // const day = this.state.date.getDate();
    // const month = this.state.date.getMonth() + 1;
    // const year = this.state.date.getFullYear();
    // return `${day}/${month}/${year}`;
  }

  setDay(event, date) {
    console.log('set date called with');
    console.log(date);
    this.setState(
      prevState => {
        const newDate = new Date(prevState.date);
        newDate.setFullYear(date.getFullYear());
        newDate.setMonth(date.getMonth());
        newDate.setDate(date.getDate());
        return {
          date: newDate,
          showDatePicker: false,
        };
      },
      () => {
        this.showTimePicker();
      },
    );
  }

  setTime(event, date) {
    console.log('set time ');
    this.setState(prevState => {
      const newDate = new Date(prevState.date);
      newDate.setHours(date.getHours(), date.getMinutes());
      return {
        date: newDate,
        showDatePicker: false,
      };
    });
  }

  onChangeName(name) {
    this.setState(() => ({
      name: name,
    }));
  }

  onChangeDesc(desc) {
    this.setState(() => ({
      description: desc,
    }));
  }

  showDayPicker() {
    this.setState(() => ({
      showDatePicker: true,
      mode: 'date',
    }));
  }

  showTimePicker() {
    this.setState(() => ({
      showDatePicker: true,
      mode: 'time',
    }));
  }

  async showImagePicker() {
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
    } catch (e) {}
  }

  render() {
    const {image} = this.state;
    const {width} = Dimensions.get('window');
    const widthMinusPadding = width - 30;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Crie um Evento</Text>
        <CustomTextInput
          name="name"
          placeholder="Nome do evento"
          style={styles.input}
          onChangeText={name => this.onChangeName(name)}
          value={this.state.name}
        />
        <CustomTextInput
          name=""
          placeholder="Descrição do Evento"
          style={styles.input}
          onChangeText={desc => this.onChangeDesc(desc)}
          value={this.state.description}
        />
        <LoadingButton
          style={styles.button}
          onPress={() => this.showDayPicker()}
        >
          Alterar data
        </LoadingButton>
        {this.state.showDatePicker && (
          <DateTimePicker
            value={this.state.date}
            onChange={(event, date) =>
              this.state.mode === 'date'
                ? this.setDay(event, date)
                : this.setTime(event, date)
            }
            is24Hour={true}
            mode={this.state.mode}
          />
        )}
        <Text>
          Data do Evento: {this.dateString()}, -{this.state.description}-
        </Text>
        <LoadingButton
          style={styles.button}
          onPress={() => this.showImagePicker()}
        >
          Escolher imagem
        </LoadingButton>
        <Image
          source={{uri: image.path}}
          style={{
            width: image.width,
            height: image.height,
          }}
        />
        <LoadingButton style={styles.button}>teste</LoadingButton>
      </View>
    );
  }
}

const defalutSpacing = 15;

const styles = StyleSheet.create({
  container: {
    padding: defalutSpacing,
  },
  title: {
    fontSize: defalutSpacing,
    fontWeight: '700',
    color: '#444',
  },
  input: {
    marginTop: defalutSpacing,
    elevation: 3,
  },
  button: {
    marginTop: defalutSpacing,
    backgroundColor: 'darkcyan',
  },
});

export default CreateEventScreen;
