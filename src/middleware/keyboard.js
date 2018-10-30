import { HANDLE_KEYPRESS } from 'actions/keyboardactions';
import { setSlideIndex } from 'actions/presentationactions';

import { getSlides } from 'selectors/slides';
import { getNextSlideAndTransition, getPreviousSlideAndTransition } from 'selectors/presentation';

const handleKeypressAction = (store, action) => {
  const { key } = action;
  const state = store.getState();
  
  if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].indexOf(key) !== -1) {
    switch(key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        // go back
        store.dispatch(setSlideIndex(...getPreviousSlideAndTransition(state)));
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        // go forward
        store.dispatch(setSlideIndex(...getNextSlideAndTransition(state)));
        break;
      default:
    }
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
