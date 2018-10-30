import PresentationSlides from 'data/presentation-slides';

const initialState = PresentationSlides;

const slides = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [ ...state ];
  }
};

export default slides;

