import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import EventItem from './EventItem';

const EventList = React.forwardRef(
  (
    {
      events,
      title,
      fontSize,
      horizontal,
      eventWidth,
      eventHeight,
      eventFontSize,
      onEventPressed,
      onEndReached,
      ListHeaderComponent,
    },
    ref,
  ) => {
    const styles = createStyle(fontSize, horizontal);
    const renderItem = item => (
      <EventItem
        image={item.image}
        title={item.title}
        width={eventWidth}
        height={eventHeight}
        fontSize={eventFontSize}
        onPress={() => onEventPressed(item)}
        onEndReached={() => onEndReached()}
      />
    );

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
          data={events}
          horizontal={horizontal}
          ListHeaderComponent={ListHeaderComponent}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.event}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          onEndReached={() => onEndReached()}
          onEndReachedThreshold={1}
          ref={ref}
        />
      </View>
    );
  },
);

const createStyle = (fontSize, horizontal) =>
  StyleSheet.create({
    container: horizontal ? {} : {height: '100%'},
    title: {
      fontSize,
      fontWeight: 'bold',
      color: '#444',
      marginLeft: 10,
    },
    list: {
      alignItems: 'center',
    },
  });

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({image: PropTypes.string, title: PropTypes.string}),
  ),
  title: PropTypes.string,
  fontSize: PropTypes.number,
  horizontal: PropTypes.bool,
  eventWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  eventHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  eventFontSize: PropTypes.number,
  onEventPressed: PropTypes.func,
  onEndReached: PropTypes.func,
  ListHeaderComponent: PropTypes.element,
};

EventList.defaultProps = {
  events: [],
  title: '',
  fontSize: 20,
  horizontal: false,
  eventWidth: 300,
  eventHeight: 200,
  eventFontSize: 16,
  onEventPressed: () => null,
  onEndReached: () => {},
  ListHeaderComponent: null,
};

export default EventList;
