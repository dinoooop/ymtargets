import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#FFF'
  },
  listItem: {
    width: "100%",
    backgroundColor: "#00d8ff",
    marginTop: 2,
    padding:20,
    color: "#FFF",
  },
  addButtonContainerStyle: {
    backgroundColor: "#F00"
  },
  iconContainer: {
    flex:1,
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 2
  },
  InputContainer: {
    width: "100%",
    padding: 40,
  },
  textInput: {
    fontSize: 28,
  },
  submitButton: {
    backgroundColor: "#00d8ff",
    width: "100%",
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  }

});

export default styles;
