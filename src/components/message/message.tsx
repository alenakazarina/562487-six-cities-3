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
    return (
      <section
        className="message message--error"
        style={MessageStyles}
      >
        <div className="message__header"
          style={MessageHeaderStyles}
        >
          <b>{status}. That’s an error.</b>
        </div>
        <div className="message__body">
          <p>Something went wrong :(</p>
          <p>Please, try again later.</p>
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
