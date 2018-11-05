import { createSelector } from 'reselect'

import { getContentById } from 'selectors/content';

export const getSlides = ({ slides }) => slides;
export const getSlideCount = state => getSlides(state).length;

export const getSlide = createSelector(
  getSlides,
  (state, id) => getContentById(state, id),
  (state, id) => id,
  (slides, content, id) => ({
    id,
    ...slides[id],
    content,
  })
);

