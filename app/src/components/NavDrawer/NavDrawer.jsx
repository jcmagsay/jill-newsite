import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import ClassCatNode from '../ClassCatNode/ClassCatNode';

import './NavDrawer.scss';

const logo = require('../../media/logo.png');

const NavDrawer = (props) => {
  const {
    isOpen,
    routes,
    toggleNav,
  } = props;


  return (
    <ClassCatNode
      as="section"
      className={[
        'nav-drawer',
        {
          'nav-drawer--open': isOpen,
        },
      ]}
    >
      <div className="nav-drawer__header">
        <NavLink
          className="nav-drawer__logo"
          onClick={toggleNav}
          to="/"
        >
          <img alt="logo" src={logo} height="100" />
        </NavLink>
      </div>
      <ul className="nav-drawer__list">
        {routes.navRoutes.map((route, i) => {
          return (
            <li
              className="nav-drawer__list-item"
              key={`navlink-${i}`}
            >
              <NavLink
                className={({ isActive, isPending }) => {
                  return isPending
                    ? "nav-drawer__link"
                    : isActive
                      ? "nav-drawer__link--active"
                      : "";
                }}
                onClick={() => toggleNav(!isOpen)}
                to={route.path}
              >
                <Text
                  tag="h5"
                  type="display-lg"
                >{route.name}</Text>

              </NavLink>
            </li>
          )
        })}
      </ul>
      <ClassCatNode
        as="button"
        className={[
          'nav-drawer__close',
          {
            'nav-drawer__close--active': isOpen,
          },
        ]}
        onClick={() => toggleNav(!isOpen)}
      >
        <Icon type="x" />
      </ClassCatNode>
    </ClassCatNode>
  );
};

export default NavDrawer;
