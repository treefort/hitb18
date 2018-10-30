import React from 'react';
import { Helmet } from 'react-helmet';

import Slides from 'components/slides';
import KeyboardInput from 'components/keyboardinput';

import 'css/main.scss';

const Main = ({ classnames, lang }) => (
  <div className={ classnames }>
    <Helmet htmlAttributes={{ lang }}>
      <meta charSet='utf-8' />
      <title>Tools &ndash; HITB2018PEK</title>
    </Helmet>
    <Slides />
    <KeyboardInput />
  </div>
);

export default Main;