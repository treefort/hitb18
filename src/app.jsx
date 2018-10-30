import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
// import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import 'normalize.css';

import KeyboardMiddleware from 'middleware/keyboard';

import reducer from './reducers';
import Main from 'components/main';

const loggerMiddleware = createLogger();

const middleware = [
  // thunkMiddleware.withExtraArgument({ emit: wsEmit }),
  loggerMiddleware,
  KeyboardMiddleware,
];

const composeEnhancers = composeWithDevTools({});

const finalMiddleware = composeEnhancers(
  applyMiddleware(...middleware), 
);

const store = createStore(
  reducer,
  finalMiddleware,
);

const persistor = persistStore(store);

ReactDom.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>,
  document.getElementById('root')
);
  
