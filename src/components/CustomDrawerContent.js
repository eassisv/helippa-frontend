import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';

const CustomDrawerContent = props => (
  <ScrollView>
    <View
      style={styles.container}
      forceInset={{top: 'always', horizontal: 'never'}}
    >
      <DrawerItems {...props} />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomDrawerContent;
