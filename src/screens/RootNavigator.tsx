import * as React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import DiaryListScreen from './DiaryListScreen';

export const AppNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  DiaryList: {
    screen: DiaryListScreen,
    navigationOptions: {
      headerTitle: 'History',
    },
  },
});

export interface Props {
  dispatch: () => {};
  nav: any;
}

function AppWithNavigationState({ dispatch, nav }: Props) {
  return <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />;
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
