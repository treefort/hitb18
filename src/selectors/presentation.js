import classNames from 'classnames';

import { getSlideCount, getSlide } from 'selectors/slides';

const getTransitionClasses = index => [...Array(index).keys()].map(id => `transition-${id + 1}`).join(' ');

export const getSlideIndex = ({ presentation: { slideIndex }}) => slideIndex;
export const getTransitionIndex = ({ presentation: { transitionIndex }}) => transitionIndex;
export const getMode = ({ presentation: { mode }}) => mode;
export const getClassnames = state => {
  const slideIndex = getSlideIndex(state);
  const transitionIndex = getTransitionIndex(state);
  const transitionClasses = getTransitionClasses(transitionIndex);
  const mode = getMode(state);

  return classNames({
    presentation: true,
    [`${mode}-mode`]: true,
    [`slide-${slideIndex}`]: true,
    [transitionClasses]: transitionIndex,
  });
};

export const getNextSlideAndTransition = state => {
  const slideIndex = getSlideIndex(state);
  const transitionIndex = getTransitionIndex(state);
  const { transitionCount } = getSlide(state, slideIndex) || {};
  const slideCount = getSlideCount(state);
  console.table({ 
    slideIndex,
    slideCount,
    transitionIndex,
    transitionCount,
  });
  if (slideIndex >= slideCount - 1) {
    if (transitionIndex >= transitionCount) {
      console.log('presentation is over');
      return [ slideIndex, transitionCount ];
    } else {
      console.log('next transition');
      return [ slideIndex, transitionIndex + 1 ];
    }
  } else {
    if (transitionIndex >= transitionCount) {
      console.log('next slide');
      return [ slideIndex + 1, 0 ];
    } else {
      console.log('next transition');
      return [ slideIndex, transitionIndex + 1 ];
    }
  }
};


export const getPreviousSlideAndTransition = state => {
  const slideIndex = getSlideIndex(state);
  const transitionIndex = getTransitionIndex(state);
  const { transitionCount } = getSlide(state, slideIndex) || {};
  const slideCount = getSlideCount(state);
  if (slideIndex === 0) {
    if (transitionIndex === 0) {
      console.log('at beginning');
      return [ slideIndex, transitionIndex ];
    } else {
      console.log('previous transition');
      return [ slideIndex, transitionIndex - 1 ];
    }
  } else {
    if (transitionIndex) {
      console.log('previous transition');
      return [ slideIndex, transitionIndex - 1 ];
    } else {
      const prevSlideIndex = slideIndex - 1;
      const { transitionCount: prevSlideTransitionCount } = getSlide(state, prevSlideIndex);
      return [ prevSlideIndex, prevSlideTransitionCount ];
    }
  }
};