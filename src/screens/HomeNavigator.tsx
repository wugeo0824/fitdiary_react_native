import * as React from 'react';
import { Icon } from 'react-native-elements';
import { TabNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import DiaryListScreen from './DiaryListScreen';

const HomeNavigator = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />,
      },
    },
    DiaryList: {
      screen: DiaryListScreen,
      navigationOptions: {
        tabBarLabel: 'History',
        tabBarIcon: ({ tintColor }) => <Icon name="history" color={tintColor} />,
      },
    },
    Graph: {
      screen: DiaryListScreen,
      navigationOptions: {
        tabBarLabel: 'Graph',
        tabBarIcon: ({ tintColor }) => <Icon name="timeline" color={tintColor} />,
      },
    },
  },
  {
    animationEnabled: true,
  },
);

export default HomeNavigator;
