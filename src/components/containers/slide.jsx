import React from 'react';
import { connect } from "react-redux";

import { getMode, getSlideIndex } from 'selectors/presentation';
import { getSlide } from 'selectors/slides';

import Slide from 'views/slide';

const mapStateToProps = (state, { id }) => {
  const { title, classes, content } = getSlide(state, id);
  const slideIndex = getSlideIndex(state);
  const mode = getMode(state);
  return {
    id,
    title,
    classes,
    content,
    slideIndex,
    mode,
  }
};

const SlideContainer = connect(mapStateToProps)(Slide);

export default SlideContainer;