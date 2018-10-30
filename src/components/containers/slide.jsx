import React from 'react';
import { connect } from "react-redux";

import { getSlide } from 'selectors/slides';

import Slide from 'views/slide';

const mapStateToProps = (state, { id }) => {
  const { title, template, bits } = getSlide(state, id);
  return {
    id,
    title,
    template,
    bits,
  }
};

const SlideContainer = connect(mapStateToProps)(Slide);

export default SlideContainer;