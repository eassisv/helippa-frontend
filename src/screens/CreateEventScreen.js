import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomTextInput from '../components/CustomTextInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import LoadingButton from '../components/LoadingButton';
import ImagePickerBox from '../components/ImagePickerBox';
import HomeHeader from '../components/HomeHeader';
import axios from 'axios';
import FormData from 'form-data';

class CreateEventScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Adicionar evento',
    drawerIcon: ({tintColor}) => (
      <Icon name="calendar-plus-o" size={26} color={tintColor} />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      showDatePicker: false,
      date: new Date(),
      name: '',
      description: '',
      mode: 'date',
      image: '',
      loading: false,
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

  async postEvent() {
    try {
      this.setState({loading: true});
      const res = await axios.post('http://ddea6d0e.ngrok.io/api/event', {
        name: this.state.name,
        description: this.state.description,
        date: this.state.date.toString(),
      });

      console.log('image', this.state.image);
      const data = new FormData();
      data.append('image', {
        uri: this.state.image.path,
        name: 'image',
        type: this.state.image.mime,
      });

      console.log('res', res.data);

      const saveImageRes = await axios.post(
        `http://ddea6d0e.ngrok.io/api/event/${res.data.id}/image`,
        data,
      );
      console.log(saveImageRes);
      this.props.navigation.navigate('HomeNavigator', {reload: true});
      // bodyFormData.set('image', imageFile);
    } catch (e) {
      console.log('error when posting event');
      console.log(e);
    } finally {
      this.setState({loading: false});
    }
  }

  render() {
    const {navigation} = this.props;
    const {width} = Dimensions.get('window');
    const widthMinusPadding = width - 30;
    const styles = createStyles({widthMinusPadding});
    return (
      <View>
        <HomeHeader
          onPressLogo={() => navigation.navigate('HomeNavigator')}
          onPressMenu={() => navigation.openDrawer()}
        />
        <KeyboardAvoidingView
          style={styles.avoidingViewContainer}
          behavior="position"
        >
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
            <LoadingButton
              style={styles.button}
              onPress={() => this.postEvent()}
              loading={this.state.loading}
            >
              Salvar
            </LoadingButton>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const defaultSpacing = 15;

const createStyles = ({widthMinusPadding}) =>
  StyleSheet.create({
    avoidingViewContainer: {
      backgroundColor: '#f7f7f7',
    },
    container: {
      padding: defaultSpacing,
      backgroundColor: '#eeeeee',
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      color: '#444',
    },
    input: {
      marginTop: defaultSpacing,
      elevation: 3,
    },
    button: {
      marginTop: defaultSpacing,
      backgroundColor: 'darkcyan',
      borderRadius: 2,
      elevation: 3,
    },
    picker: {
      height: 200,
      marginTop: defaultSpacing,
      width: widthMinusPadding,
      padding: defaultSpacing,
    },
    date: {
      marginTop: defaultSpacing,
    },
  });

export default CreateEventScreen;
