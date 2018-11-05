import React from 'react';
import PropTypes from 'prop-types';
import { clamp } from 'lodash';
import classNames from 'classnames';

import Slide from 'components/slide';

class Slides extends React.PureComponent {
  generateSlideComponentsByRange(startIndex, stopIndex) {
    const slidesToGenerate = stopIndex - startIndex;
    return [...Array(slidesToGenerate).keys()].map(index =>
      <Slide key={`slide_${startIndex + index}`} id={startIndex + index} />);
  }
  checkRange(startIndex, stopIndex) {
    const { slideCount } = this.props;
    if (startIndex > stopIndex) return this.checkRange(stopIndex, startIndex);
    const clampedStartIndex = clamp(startIndex, 0, slideCount);
    const clampedStopIndex = clamp(stopIndex, 0, slideCount);
    return [ clampedStartIndex, clampedStopIndex ];
  }
  generateSlideComponents() {
    const { slideCount, slideIndex, mode } = this.props;
    switch(mode) {
      case 'slides':
        return this.generateSlideComponentsByRange(...this.checkRange(slideIndex, slideIndex + 1));
      case 'notes':
        return this.generateSlideComponentsByRange(...this.checkRange(slideIndex, slideIndex + 2)); // fetch next slide as well
      default:
        return this.generateSlideComponentsByRange(...this.checkRange(0, slideCount - 1)); // fetch them all
    }
  }
  render() {
    const slideComponents = this.generateSlideComponents();
    const classes = classNames({
      slides: true,
    });
    return (
      <div className={ classes }>
        { slideComponents }
      </div>
    ); 
  }
}

export default Slides;