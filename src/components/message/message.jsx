import React, {PureComponent} from 'react';
import {number, func} from 'prop-types';

const styles = {
  message: {
    position: `fixed`,
    top: `5%`,
    right: `5%`,
    zIndex: 1000,
    padding: `20px 20px 10px 20px`,
    backgroundColor: `#f47d75`,
    borderRadius: `3px`,
    color: `#ffffff`
  },
  header: {
    paddingBottom: `10px`,
    borderBottom: `1px solid rgba(255, 255, 255, 0.5)`
  },
  button: {
    position: `absolute`,
    top: `5px`,
    right: `5px`,
    zIndex: 10,
    padding: `10px`,
    backgroundSize: `10px`,
    backgroundImage: `url(./img/close.svg)`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
    color: `#ffffff`,
    fontWeight: `bold`
  }
};

class Message extends PureComponent {
  constructor(props) {
    super(props);
    this._onEscKeyDown = this._onEscKeyDown.bind(this);
    this._handleClose = this._handleClose.bind(this);
  }

  componentDidMount() {
    document.addEventListener(`keydown`, this._onEscKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener(`keydown`, this._onEscKeyDown);
  }

  _handleClose() {
    this.props.onClose();
  }

  _onEscKeyDown(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      this.props.onClose();
    }
  }

  render() {
    const {status} = this.props;
    return (
      <section
        className="message message--error"
        style={styles.message}
      >
        <div className="message__header"
          style={styles.header}
        >
          <b>Error status code: {status}</b>
        </div>
        <div className="message__body">
          <p>Something went wrong :(</p>
          <p>Please, try again later.</p>
        </div>
        <button
          className="message__button button"
          style={styles.button}
          onClick={this._handleClose}></button>
      </section>
    );
  }
}

Message.propTypes = {
  status: number.isRequired,
  onClose: func.isRequired
};

export default React.memo(Message);
