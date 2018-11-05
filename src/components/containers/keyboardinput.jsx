import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { handleKeypress } from 'actions/keyboardactions';

class KeyboardInput extends React.PureComponent {
  componentDidMount() {
    this.keyHandler = this.handleKeyDown.bind(this);
    document.addEventListener('keydown', this.keyHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyHandler);
  }

  handleKeyDown = event => {
    const { key, shiftKey, ctrlKey } = event;
    const { dispatchHandleKeypress, hasSession, isChatting, pathname } = this.props;

    if ([
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'PageUp',
      'PageDown',
      'm',
      'l',
    ].indexOf(key) !== -1) {
      event.preventDefault();
      dispatchHandleKeypress({ key, shiftKey, ctrlKey });
    }
  }

  render() {
    return (
      <div style={{ position: 'absolute' }} />
    );
  }; 
}

KeyboardInput.propTypes = {
  dispatchHandleKeypress: PropTypes.func.isRequired,
};

// const mapStateToProps = (state, {
//   location: {
//     pathname, 
//   }
// }) => ({ 
//   hasSession: isAuthenticated(state),
//   isChatting: chatHasFocus(state),
//   pathname,
// });

const mapDispatchToProps = dispatch => ({
  dispatchHandleKeypress: payload => dispatch(handleKeypress(payload)),
});

const KeyboardInputContainer = connect(null, mapDispatchToProps)(KeyboardInput);

export default KeyboardInputContainer;
