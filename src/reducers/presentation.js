import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import { SET_SLIDE_INDEX } from 'actions/presentationactions';

const persistConfig = {
  key: 'hitb:presentation',
  storage,
};


const initialState = {
  slideIndex: 0,
  transitionIndex: 0,
  mode: 'presentation',
};

const presentation = (state = initialState, action) => {
  switch (action.type) {
    case SET_SLIDE_INDEX:
      return {
        ...state,
        slideIndex: action.slideIndex,
        transitionIndex: action.transitionIndex,
      }
    default:
      return { ...state };
  }
};

export default persistReducer(persistConfig, presentation);
