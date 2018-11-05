import React from 'react';
import { Helmet } from 'react-helmet';

import Slides from 'components/slides';
import KeyboardInput from 'components/keyboardinput';

import 'css/main.scss';

class Main extends React.PureComponent {
  componentDidUpdate() {
    const { slideIndex } = this.props;
    
    const videos = document.querySelectorAll('video');
    videos.forEach(video => video.pause());
    
    const activeVideo = document.querySelector(`.slide-${slideIndex} video`);
    if (activeVideo) activeVideo.play();
  }
  render() {
    const { classnames, lang } = this.props;
    return (
      <div className={ classnames }>
        <Helmet htmlAttributes={{ lang }}>
          <meta charSet='utf-8' />
          <title>Tools &ndash; HITB2018PEK</title>
        </Helmet>
        <Slides />
        <KeyboardInput />
      </div>
    );
  }
}

export default Main;