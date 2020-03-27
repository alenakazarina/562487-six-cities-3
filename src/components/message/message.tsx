import * as React from 'react';

interface Props {
  status: number;
  onClose: () => void;
}

const MessageStyles: React.CSSProperties = {
  position: `fixed`,
  top: `5%`,
  right: `5%`,
  zIndex: 1000,
  padding: `20px 20px 10px 20px`,
  backgroundColor: `#f47d75`,
  borderRadius: `3px`,
  color: `#ffffff`
};

const MessageHeaderStyles: React.CSSProperties = {
  paddingBottom: `10px`,
  borderBottom: `1px solid rgba(255, 255, 255, 0.5)`
};

const ButtonStyles: React.CSSProperties = {
  position: `absolute`,
  top: `5px`,
  right: `5px`,
  zIndex: 10,
  padding: `10px`,
  backgroundSize: `18px`,
  backgroundImage: `url(./img/close.svg)`,
  backgroundPosition: `center`,
  backgroundRepeat: `no-repeat`,
  color: `#ffffff`,
  fontWeight: `bold`
};

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
