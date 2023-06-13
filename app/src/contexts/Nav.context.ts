import { createContext, useContext } from 'react';

const initialNav: any = false;
const NavContext = createContext(initialNav);

const initialNavDispatch: any = null;
const NavDispatchContext = createContext(initialNavDispatch);

export type NavDispatchActions = 'toggle' | 'reset' | 'open';

export function useNav() {
  return useContext(NavContext);
}

export function useNavDispatch() {
  return useContext(NavDispatchContext);
}

function navReducer(
  navState: boolean,
  action: any & { type: NavDispatchActions }
) {
  // generally this is a switch statement, however, this is a bool, therefore returning the inverse is fine for now
  return !navState;
}


export {
  NavContext,
  NavDispatchContext,
  navReducer,
  initialNav,
  initialNavDispatch,
};

