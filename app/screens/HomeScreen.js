import React from "react";
import {
  View,
  Text,
  FlatList,
  Modal,
  TouchableHighlight,
  TextInput,
  AsyncStorage
} from "react-native";
import { Button, Icon } from "react-native-elements";
import global from "../config/GlobalStyles";
import styles from "../styles/HomeStyle";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Todo"
  };

  state = {
    title: '',
    modalVisible: false,
    todo: [
      { title: "Test task" },
      { title: "Another test" },
      { title: "123 test" },
      { title: "5005 test" }
    ]
  };

  componentDidMount() {
    console.log("Log 3");
  }

  create = (title) => {
    this.setState(prevState => ({
      modalVisible: false,
      todo: [{title: this.state.title}].concat(prevState.todo),
      title: ''
    }));

  };

  setModalVisible = () => {
    this.setState({ modalVisible: true });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon
            raised
            name="add"
            type="material-icons"
            color="#fff"
            containerStyle={styles.addButtonContainerStyle}
            onPress={this.setModalVisible}
          />
        </View>
        <FlatList
          data={this.state.todo}
          renderItem={({ item }) => (
            <Text style={styles.listItem}>{item.title}</Text>
          )}
        />
        <View style={styles.container}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert("Modal has been closed.");
            }}
          >
            <View style={{ marginTop: 22 }}>
              <Text style={global.modalTitle}>Create</Text>
              <View style={styles.InputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter new todo"
                  value={this.state.title}
                  onChangeText={title => this.setState({ title })}
                />
                <Button
                  onPress={this.create}
                  title="ADD"
                  buttonStyle={styles.submitButton}
                />
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}
