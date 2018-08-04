import React from 'react';
import { View, Text, FlatList } from 'react-native';
import GlobalStyles from '../config/GlobalStyles';
import styles from '../styles/HomeStyle';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Todo',
  };

  state = {
    todo: [
      {title: "Test task"},
      {title: "Another test"},
    ]
  }

  render() {
    return (
      <View style={styles.container}>
      <FlatList
        data={this.state.todo}
        renderItem={({item}) => <Text style={styles.listItem}>{item.title}</Text>}
        />
      </View>
    );
  }
}
