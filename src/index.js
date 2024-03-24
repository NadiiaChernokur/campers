import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import { persistor, store } from './redux/store.js';

import { PersistGate } from 'redux-persist/integration/react';

import App from './App.jsx';
import { Provider } from 'react-redux';
import { GlobalStyle } from './GlobalStyled.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/campers">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
    <GlobalStyle />
  </React.StrictMode>
);
