import { combineReducers } from 'redux';

import presentation from './presentation';
import content from './content';
import languages from './languages';
import slides from './slides';

export default combineReducers({
  presentation,
  content,
  slides,
  languages,
});
