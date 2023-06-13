import React, { FC, ReactNode, useReducer } from 'react';
import {
  NavContext,
  NavDispatchContext,
  navReducer,
  initialNav,
} from '../contexts/Nav.context';

type Theme = 'light' | 'dark';
type NavProviderType = {
  children?: ReactNode | ReactNode[],
  theme?: Theme
};

const NavProvider: FC<NavProviderType> = ({ children }) => {
  const [navState, dispatchNav] = useReducer(
    navReducer,
    initialNav,
  );

  return (
    <NavContext.Provider value={navState}>
      <NavDispatchContext.Provider value={dispatchNav}>
        {children || null}
      </NavDispatchContext.Provider>
    </NavContext.Provider >
  );
}

export default NavProvider;
