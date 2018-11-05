import React from 'react';
import { connect } from "react-redux";

import { getMode, getSlideIndex } from 'selectors/presentation';
import { getSlideCount } from 'selectors/slides';

import Slides from 'views/slides';

const mapStateToProps = state => ({
  slideCount: getSlideCount(state),
  slideIndex: getSlideIndex(state),
  mode: getMode(state),
});

const SlidesContainer = connect(mapStateToProps)(Slides);

export default SlidesContainer;