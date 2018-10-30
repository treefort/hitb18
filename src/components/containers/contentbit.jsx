import React from 'react';
import { connect } from "react-redux";
import classNames from 'classnames';

import { getContentById } from 'selectors/content';

import ContentBit from 'views/contentbit';

const mapStateToProps = (state, { contentId, type, ...bitProps }) => {
  const content = getContentById(state, contentId);
  const className = classNames({
    [`type-${type}`]: true,
    [`transition-${bitProps.tx}`]: typeof bitProps.tx !== 'undefined',
  });
  return {
    contentId,
    className,
    content,
    ...bitProps,
  }
};

const ContentBitContainer = connect(mapStateToProps)(ContentBit);

export default ContentBitContainer;