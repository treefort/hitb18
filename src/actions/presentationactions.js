export const SET_SLIDE_INDEX = 'SET_SLIDE_INDEX';
export const setSlideIndex = (slideIndex, transitionIndex = 0) => ({
  type: SET_SLIDE_INDEX,
  slideIndex,
  transitionIndex,
});
