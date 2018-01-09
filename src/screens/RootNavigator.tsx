import * as React from 'react';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import DiaryListScreen from './DiaryListScreen';

export const AppNavigator = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: 'Home',
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />,
      },
    },
    DiaryList: {
      screen: DiaryListScreen,
      navigationOptions: {
        headerTitle: 'History',
        tabBarLabel: 'History',
        tabBarIcon: ({ tintColor }) => <Icon name="history" color={tintColor} />,
      },
    },
    Graph: {
      screen: DiaryListScreen,
      navigationOptions: {
        headerTitle: 'Graph',
        tabBarLabel: 'Graph',
        tabBarIcon: ({ tintColor }) => <Icon name="timeline" color={tintColor} />,
      },
    },
  },
  {
    animationEnabled: true,
  },
);

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
