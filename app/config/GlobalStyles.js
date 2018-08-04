import { StyleSheet } from 'react-native';

const global = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
  modalTitle: {
    fontSize: 19,
    alignSelf: 'center'
  }
});

export default global;
