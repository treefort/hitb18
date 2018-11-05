import { HANDLE_KEYPRESS } from 'actions/keyboardactions';
import { setSlideIndex, setMode } from 'actions/presentationactions';
import { swapPrimaryLanguage } from 'actions/languageactions';

import { 
  getNextSlideIndex,
  getNextMode,
  getPreviousSlideIndex } from 'selectors/presentation';

const handleKeypressAction = (store, action) => {
  const { key } = action;
  const state = store.getState();

  switch(key) {
    case 'l': 
      // swap primary language
      store.dispatch(swapPrimaryLanguage());
      break;
    case 'm':
      // change presentation mode
      store.dispatch(setMode(getNextMode(state)));
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
    case 'PageUp':
      // go back
      store.dispatch(setSlideIndex(getPreviousSlideIndex(state)));
      break;
    case 'ArrowRight':
    case 'ArrowDown':
    case 'PageDown':
      // go forward
      store.dispatch(setSlideIndex(getNextSlideIndex(state)));
      break;
    default:
  }
};

const KeyboardMiddleware = store => next => action => {
  switch(action.type) {
    case HANDLE_KEYPRESS:
      handleKeypressAction(store, action);
      next(action);
      break;
    default:
    next(action);
  }
}

export default KeyboardMiddleware;
