import * as React from 'react';
import {MessageStyles, MessageHeaderStyles, ButtonStyles} from './styles';

interface Props {
  status: number;
  onClose: () => void;
}

class Message extends React.PureComponent<Props> {
  props: Props;

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
    const text = {
      header: ``,
      message: ``,
      end: ``
    };
    if (status === 401) {
      text.header = `Unauthorized.`;
      text.message = `You are not authorized :(`;
      text.end = `Please, Sign in to access your account.`;
    } else {
      text.header = `That’s an error.`;
      text.message = `Something went wrong :(`;
      text.end = `Please, try again later.`;
    }

    return (
      <section
        className="message message--error"
        style={MessageStyles}
      >
        <div className="message__header"
          style={MessageHeaderStyles}
        >
          <b>{status}. {text.header}</b>
        </div>
        <div className="message__body">
          <p>{text.message}</p>
          <p>{text.end}</p>
        </div>
        <button
          className="message__button button"
          style={ButtonStyles}
          onClick={this._handleClose}></button>
      </section>
    );
  }
}

export default React.memo(Message);
