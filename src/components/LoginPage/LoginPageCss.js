import { StyleSheet } from 'react-native';

export const loginPageCSS = StyleSheet.create(
    {
  container: {
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#bc0600',
    width: '100%',
    height: 60,
    paddingLeft: 30,
    paddingTop: 23,
  },
  header__title: {
    color: 'white',
    fontSize: 14
  },
  main: {
    height: '100%',
    backgroundColor: 'white',
    paddingTop: 30,
    paddingRight: 30,
    paddingBottom: 30,
    paddingLeft: 30
  },
  main__title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#bc0600',
    textAlign: 'center',
    marginTop: 30
  },
  main__description: {
    textAlign: 'center',
    color: '#b8b8b8',
    marginTop: 20,
    fontSize: 12,
    lineHeight: 16
  },
  login: {
    color: '#b8b8b8',
    marginTop: 20,
    lineHeight: 20,
    fontSize: 12
  },
  login__inputField: {
    width: '100%',
    borderWidth: 0,
    borderColor: 'black',
    borderStyle: 'solid',
    borderBottomColor: '#b8b8b8',
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10
  },
  login__submitBtn: {
    width: '90%',
    height: 40,
    marginTop: 20,
    marginRight: '5%',
    marginBottom: 20,
    marginLeft: '5%',
    backgroundColor: '#bc0600',
    borderRadius: 7,
    justifyContent: "center"
  },
  login__submitBtnText: {
    color: 'white',
    textAlign: 'center'
  }
}
);