import * as React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
// import PropTypes from 'prop-types';

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

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

// AppWithNavigationState.propTypes = {
//     dispatch: PropTypes.func.isRequired,
//     nav: PropTypes.object.isRequired,
//   };

  const mapStateToProps = state => ({
    nav: state.nav,
  });

  export default connect(mapStateToProps)(AppWithNavigationState);
