import GetContent from 'data/presentation-content';

const initialState = GetContent();

const content = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default content;

