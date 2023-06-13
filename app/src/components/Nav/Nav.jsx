import './Nav.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import ClassCatNode from '../ClassCatNode/ClassCatNode';

const logo = require('../../media/logo.png');

const Nav = ({
  isOpen,
  toggleNav,
  routes,
}) => (
  <nav className="nav">
    <NavLink
      className="nav__logo"
      to="/"
    >
      <img src={logo} height="50" alt={`img-${logo}`} />
    </NavLink>
    <ul className="nav__list">
      {routes.navRoutes.map((route, i) => {
        return (
          <li
            className="nav__list-item"
            key={`navlink-${i}`}
          >
            <NavLink
              className={({ isActive, isPending }) => {
                return isPending
                  ? "nav__link"
                  : isActive
                    ? "nav__link nav__link--active"
                    : "nav__link";
              }}
              to={route.path}
            >
              {route.name}
            </NavLink>
          </li>
        )
      })}
    </ul>
    <ClassCatNode
      className={[
        'nav__trigger',
        {
          'nav__trigger--active': isOpen,
        },
      ]}
    >
      <button onClick={() => toggleNav(!isOpen)}>
        <Icon type="menu" />
      </button>
    </ClassCatNode>
  </nav >
);

export default Nav;
