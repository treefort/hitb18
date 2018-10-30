import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Slide from 'components/slide';

const generateSlideComponents = slideCount => [ ...Array(slideCount).keys()].map(
  id => <Slide key={`slide_${id}`} id={id} />
);

const Slides = ({ slideCount }) => {
  const slideComponents = generateSlideComponents(slideCount);
  const classes = classNames({
    slides: true,
  });
  return (
    <div className={ classes }>
      { slideComponents }
    </div>
  );
    
};

export default Slides;