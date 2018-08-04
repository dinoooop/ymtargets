import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button, Icon } from 'react-native-elements';
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
      {title: "123 test"},
      {title: "5005 test"},
      {title: "Another test"},
      {title: "XYZ test"},
      {title: "CODE test"},
      {title: "Another test"},
      {title: "Another test"},
      {title: "Another test"},
      {title: "Another test"},
      {title: "Another test"},
      {title: "Another test"},
      {title: "Another test"},
      {title: "Another test"},
      {title: "Another test"},
      {title: "Another test"},
      {title: "Another test"},
      {title: "Another test"},
      {title: "Another test"},
      {title: "Another test"},
      {title: "Another test"},
      {title: "Another test"},
      {title: "Another test"},
      {title: "Another test"},
      {title: "Another test"},
      {title: "Another test"},
      {title: "Another test"},
      {title: "Another test"},
      {title: "Another test"},
      {title: "Another test"},
      {title: "Another test"},
      {title: "Another test"},
    ]
  }

  create = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon
            raised
            name='add'
            type='material-icons'
            color='#fff'
            containerStyle={styles.addButtonContainerStyle}
            onPress={() => console.log('hello')} />
          </View>
        <FlatList
          data={this.state.todo}
          renderItem={({item}) => <Text style={styles.listItem}>{item.title}</Text>}
          />

      </View>
    );
  }
}
