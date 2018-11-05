import classNames from 'classnames';

import { getNextIndex, getPreviousIndex } from 'lib/arrayutils';
import { getSlides } from 'selectors/slides';
import { PresentationMode } from 'reducers/presentation';

const ModeToggleOrder = [
  PresentationMode.SLIDES,
  PresentationMode.NOTES,
  PresentationMode.PRINT,
];

export const getSlideIndex = ({ presentation: { slideIndex }}) => slideIndex;

export const getMode = ({ presentation: { mode }}) => mode;

export const getNextMode = state => {
  const currentMode = getMode(state);
  const currentModeIndex = ModeToggleOrder.indexOf(currentMode);
  const nextModeIndex = getNextIndex(currentModeIndex, ModeToggleOrder, true);
  return ModeToggleOrder[nextModeIndex];
};

export const getClassnames = state => {
  const slideIndex = getSlideIndex(state);
  const mode = getMode(state);

  return classNames({
    presentation: true,
    [`${mode}-mode`]: true,
    [`slide-${slideIndex}`]: true,
  });
};

export const getNextSlideIndex = state => {
  const slideIndex = getSlideIndex(state);
  const slidesArray = getSlides(state);
  return getNextIndex(slideIndex, slidesArray);
};

export const getPreviousSlideIndex = state => {
  const slideIndex = getSlideIndex(state);
  const slidesArray = getSlides(state);
  return getPreviousIndex(slideIndex, slidesArray);
};