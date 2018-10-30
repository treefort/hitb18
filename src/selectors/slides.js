import { createSelector } from 'reselect'

export const getSlides = ({ slides }) => slides;
export const getSlideCount = state => getSlides(state).length;

export const getSlide = createSelector(
  getSlides,
  (state, id) => id,
  (slides, id) => slides[id]
);

