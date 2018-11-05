import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TextContent from 'views/content-type/text';

const Slide = ({ id, content, classes, slideIndex, mode }) => {
  const isVideo = mode === 'slides' && classes.indexOf('video') !== -1;
  const videoSrc = classes.indexOf('tc') !== -1 ? 'tc' : 'hedberg';
  const classeNames = classNames({
    slide: true,
    [`slide-${id}`]: true,
    [`${classes.join(' ')}`]: true,
    fs: true,
    visible: slideIndex === id,
  });
  return (
    <div className={ classeNames }>
      { !isVideo ?
        <TextContent contentId={ id} content={ content } />
        :
        <video src={`video/${videoSrc}.mp4`} autoPlay={slideIndex === id}>
          Sorry, your browser doesn't support embedded videos.
        </video>
      }
    </div>
  );
    
};

export default Slide;