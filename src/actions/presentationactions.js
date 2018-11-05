export const SET_SLIDE_INDEX = 'SET_SLIDE_INDEX';
export const setSlideIndex = (slideIndex) => ({
  type: SET_SLIDE_INDEX,
  slideIndex,
});

export const SET_MODE = 'SET_MODE';
export const setMode = mode => ({
  type: SET_MODE,
  mode,
});