import React from 'react';
import PropTypes from 'prop-types';

import TextContent from 'views/content-type/text';

const ContentBit = ({ type, ...bitProps }) => {
  switch(type) {
    case 'text':
    default:
      return <TextContent {...bitProps} />;
  };
    
};

export default ContentBit;