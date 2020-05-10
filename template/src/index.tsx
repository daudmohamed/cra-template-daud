import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from 'styled-components'
import { Provider } from 'react-redux';
import store, {persistor} from "./store";
import {PersistGate} from "redux-persist/integration/react";

const theme =  {
    mode: {
        light: '#00f5ff',
        dark: '#0006a3',
    }
};

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate persistor={persistor}>
              <ThemeProvider theme={theme}>
                  <App />
              </ThemeProvider>
          </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
