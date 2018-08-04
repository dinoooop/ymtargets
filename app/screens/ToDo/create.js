import React from 'react';
import { View, Text, FlatList } from 'react-native';
import GlobalStyles from '../config/GlobalStyles';
import styles from '../styles/HomeStyle';

export default class TodoCreateScreen extends React.Component {

  static navigationOptions = {
    title: 'Create Todo',
  };

  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}
