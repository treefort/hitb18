import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import { SET_SLIDE_INDEX, SET_MODE } from 'actions/presentationactions';

export const PresentationMode = {
  SLIDES: 'slides', // single slide 'presentation' view
  NOTES: 'notes',   // speaker notes
  PRINT: 'print',   // complete doc with standard formatting
};

const persistConfig = {
  key: 'hitb:presentation',
  storage,
};


const initialState = {
  slideIndex: 0,
  mode: PresentationMode.SLIDES,
};

const presentation = (state = initialState, action) => {
  switch (action.type) {
    case SET_SLIDE_INDEX:
      return {
        ...state,
        slideIndex: action.slideIndex,
      }
    case SET_MODE:
      return {
        ...state,
        mode: action.mode,
      };
    default:
      return { ...state };
  }
};

export default persistReducer(persistConfig, presentation);
