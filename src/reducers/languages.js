import { SET_LANGUAGES, SWAP_PRIMARY_LANGUAGE } from 'actions/languageactions';

const initialState = [
  'zh',
  'en',
];

const languages = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGES:
      return action.languages;
    case SWAP_PRIMARY_LANGUAGE:
      return state.reverse();
    default:
      return [ ...state ];
  }
};

export default languages;

