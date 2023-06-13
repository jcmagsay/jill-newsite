import React, { FC } from 'react';
import Footer from '../components/Footer/Footer';
import { useNav, useNavDispatch } from '../contexts/Nav.context';
import Nav from './Nav/Nav';
import routes from '../routes/routes';
import NavDrawer from './NavDrawer/NavDrawer';
import { Route, Routes } from 'react-router-dom';

const Main: FC = () => {

  const navState = useNav();
  const navDispatch = useNavDispatch();

  return (
    <>
      <div className="site">
        <header role="banner">
          <Nav
            isOpen={navState}
            routes={routes}
            toggleNav={navDispatch}
          />
          <NavDrawer
            isOpen={navState}
            routes={routes}
            toggleNav={navDispatch}
          />
        </header>
        <main id="main" role="main">
          <Routes>
            {routes.all.map((route, i) =>
              <Route
                key={`route-${i}`}
                path={route.path}
                Component={(props: any) => {
                  return (
                    <route.component {...props} />
                  )
                }}
              />
            )}
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Main;
