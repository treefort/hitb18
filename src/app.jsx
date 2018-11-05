import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { setSlideIndex, setMode } from 'actions/presentationactions';
import { getSlideIndex, getMode } from 'selectors/presentation';

import 'normalize.css';

import KeyboardMiddleware from 'middleware/keyboard';

import reducer from './reducers';
import Main from 'components/main';

const loggerMiddleware = createLogger();

const middleware = [
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
  
const handleLCUpdate = data => {
  const state = store.getState();
  const currentMode = getMode(state);
  const slideIndex = getSlideIndex(state);
  try {
    const parsed = JSON.parse(data.newValue || '');
    if (currentMode === 'slides' && parsed.slideIndex !== slideIndex) {
      if (typeof parsed.slideIndex !== 'undefined') {
        store.dispatch(setSlideIndex(parseInt(parsed.slideIndex, 10), parseInt(parsed.transitionIndex, 10)));
      }
    }
  } catch(e) {}
};

window.addEventListener('storage', handleLCUpdate, false);
