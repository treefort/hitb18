import { SET_LANGUAGES } from 'actions/languageactions';

const initialState = [
  'zh',
  'en',
];

const languages = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGES:
      return action.languages;
    default:
      return [ ...state ];
  }
};

export default languages;

