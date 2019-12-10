import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import LoadingButton from '../components/LoadingButton';
import ImagePickerBox from '../components/ImagePickerBox';

class CreateEventScreen extends React.Component {
  constructor(props) {
    super(props);
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
    const {date} = this.state;
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    // const day = this.state.date.getDate();
    // const month = this.state.date.getMonth() + 1;
    // const year = this.state.date.getFullYear();
    // return `${day}/${month}/${year}`;
  }

  timeString() {
    const {date} = this.state;
    return `${date.getHours()}:${date.getMinutes()}`;
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

  onChangeImage(image) {
    this.setState({image});
  }

  render() {
    const {width} = Dimensions.get('window');
    const widthMinusPadding = width - 30;
    const styles = createStyles({widthMinusPadding});
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Crie um Evento</Text>
        <ImagePickerBox
          style={styles.picker}
          onChange={img => this.onChangeImage(img)}
        />
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
        <Text style={styles.date}>
          Evento ocorre em {this.dateString()} às {this.timeString()}
        </Text>
        <LoadingButton style={styles.button}>CRIAR EVENTO</LoadingButton>
      </View>
    );
  }
}

const defalutSpacing = 15;

const createStyles = ({widthMinusPadding}) =>
  StyleSheet.create({
    container: {
      padding: defalutSpacing,
    },
    title: {
      fontSize: 20,
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
      borderRadius: 2,
      elevation: 3,
    },
    picker: {
      height: 200,
      marginTop: defalutSpacing,
      width: widthMinusPadding,
      padding: defalutSpacing,
    },
    date: {
      marginTop: defalutSpacing,
    },
  });

export default CreateEventScreen;
