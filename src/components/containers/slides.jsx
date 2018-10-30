import React from 'react';
import { connect } from "react-redux";

import { getSlideCount } from 'selectors/slides';

import Slides from 'views/slides';

const mapStateToProps = state => ({
  slideCount: getSlideCount(state),
});

const SlidesContainer = connect(mapStateToProps)(Slides);

export default SlidesContainer;