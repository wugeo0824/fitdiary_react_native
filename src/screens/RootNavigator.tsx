import * as React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, NavigationProp } from 'react-navigation';

import HomeNavigator from './HomeNavigator';
import RecordFormScreen from './RecordFormScreen';

export const AppNavigator = StackNavigator(
  {
    Root: {
      screen: HomeNavigator,
      navigationOptions: {
        header: null, // hides the header bar
        headerBackTitle: 'Home'
      },
    },
    Record: {
      screen: RecordFormScreen,
      navigationOptions: {
        headerTitle: 'RECORD',
      },
    },
  },
  {
    mode: 'modal',
  },
);

function AppWithNavigationState({ dispatch, nav }) {
  return <AppNavigator navigation={addNavigationHelpers<any>({ dispatch, state: nav })} />;
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
