/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  StackNavigator,
} from 'react-navigation';

import reducers from './reducers';
import AppWithNavigationState from './screens/RootNavigator';

class App extends React.Component<object, object> {
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
