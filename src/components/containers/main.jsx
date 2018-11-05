import React from 'react';
import { connect } from "react-redux";

import { getClassnames, getSlideIndex } from 'selectors/presentation';
import { getDisplayLanguages } from 'selectors/languages';

import Main from 'views/main';

const DEFAULT_LANGUAGE = 'en';

const selectFirstLanguage = state => {
  const languages = getDisplayLanguages(state) || [];
  if (!languages.length) return DEFAULT_LANGUAGE;
  return languages[0];
};

const mapStateToProps = state => ({
  classnames: getClassnames(state),
  lang: selectFirstLanguage(state),
  slideIndex: getSlideIndex(state),
});

const MainContainer = connect(mapStateToProps)(Main);

export default MainContainer;