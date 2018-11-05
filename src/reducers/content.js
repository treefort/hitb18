import { pick } from 'lodash';

import PresentationContent from 'data/presentation-content';

const initialState = PresentationContent.map(
  (slideContent, slideNum) => pick(slideContent, [
      'en',
      'zh',
      'notes',
    ]));

const content = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [ ...state ];
  }
};

export default content;

