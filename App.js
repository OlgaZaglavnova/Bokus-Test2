import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Provider} from 'react-redux';
import {initStore} from './src/store/store';
import {loadList} from './src/actions/listAction';

import LoginPage from './src/components/LoginPage/LoginPage';
import ListPage from './src/components/ListPage/ListPage';
import HeaderRight from './src/components/HeaderRight/HeaderRight';
import ItemPage from './src/components/ItemPage/ItemPage';

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    const store = initStore();
    store.dispatch(loadList());
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login"
                              headerMode="screen"
                              screenOptions={{
                                headerTintColor: 'white',
                                headerStyle: { backgroundColor: '#bc0600' },
                              }}>
              <Stack.Screen name="Login" component={LoginPage} options={{title: "Вход в личный кабинет"}} />
              <Stack.Screen name="List" component={ListPage} options={{title: "Список", headerLeft: null, headerRight: () => (<HeaderRight />)}}  />
              <Stack.Screen name="Item" component={ItemPage} options={{title: "График", headerRight: () => (<HeaderRight />)}}  />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

