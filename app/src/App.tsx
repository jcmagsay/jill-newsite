import React, { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import ErrorBlock from './components/ErrorBlock/ErrorBlock';
import Main from './components/main';
import NavProvider from './providers/Nav.provider';
import { BrowserRouter } from 'react-router-dom';

const App: FC = () => {

  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary FallbackComponent={ErrorBlock}>
          <BrowserRouter>
            <NavProvider>
              <Main />
            </NavProvider>
          </BrowserRouter>
          {/* <Provider store={store}> */}
          {/* </Provider> */}
          {/* <Provider store={store}> */}
          {/* </Provider> */}
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
