import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ContentBit from 'components/contentbit';

const generateContentBits = bits => bits.map(
  (bit, index) => <ContentBit key={`bit_${bit.contentId}`} {...bit} />
);

const Slide = ({ id, title, template, bits }) => {
  const contentBits = generateContentBits(bits);
  const classes = classNames({
    slide: true,
    [`slide-${id}`]: true,
    [template]: true,
  });
  return (
    <div className={ classes }>
      { contentBits }
    </div>
  );
    
};

export default Slide;