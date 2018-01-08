/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';

import reducers from './reducers';
import AppWithNavigationState from './screens/RootNavigator';

class App extends React.Component<object, object> {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyA5_km1p04lYwN9ODqO5-p48_QoBq3pi8s',
      authDomain: 'fitdiary-react-native-824.firebaseapp.com',
      databaseURL: 'https://fitdiary-react-native-824.firebaseio.com',
      projectId: 'fitdiary-react-native-824',
      storageBucket: '',
      messagingSenderId: '314967137283',
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers);
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
