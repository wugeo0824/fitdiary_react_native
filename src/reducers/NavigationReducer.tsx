import { AppNavigator } from '../screens/RootNavigator';
import { NavigationActions } from 'react-navigation';

let initialNavState = AppNavigator.router.getStateForAction(
  NavigationActions.init(), null
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}

export default nav;
