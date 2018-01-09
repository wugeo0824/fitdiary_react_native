import * as React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, NavigationProp } from 'react-navigation';

import HomeNavigator from './HomeNavigator';
import DiaryListScreen from './DiaryListScreen';

export const AppNavigator = StackNavigator({
  Root: {
    screen: HomeNavigator,
    navigationOptions: {
      header: null, // hides the header bar
    },
  },
  Record: {
    screen: DiaryListScreen,
    navigationOptions: {
      headerTitle: 'Detail Screen',
    },
  },
});

function AppWithNavigationState({ dispatch, nav }) {
  return <AppNavigator navigation={addNavigationHelpers<any>({ dispatch, state: nav })} />;
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
