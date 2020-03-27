import * as React from 'react';
import {AuthData} from '../../types';
import LoginInput from '../login-input/login-input';
import SubmitButton from '../submit-button/submit-button';
import withChange from '../../hocs/with-change/with-change';

interface Props {
  errorStatus: number;
  isDisabled: boolean;
  setDisabled: (status: boolean) => void;
  login: (authData: AuthData) => void;
};

const LoginInputWrapped = withChange(LoginInput);

class LoginForm extends React.PureComponent<Props> {
  props: Props;

  private loginRef: React.RefObject<HTMLInputElement>;
  private passRef: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);
    this.loginRef = React.createRef();
    this.passRef = React.createRef();
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidUpdate({errorStatus}) {
    if (errorStatus) {
      this.props.setDisabled(false);
    }
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    const userLogin = this.loginRef.current.value;
    const userPassword = this.passRef.current.value;
    this.props.setDisabled(true);
    this.props.login({
      login: userLogin,
      password: userPassword
    });
  }

  render() {
    const {isDisabled} = this.props;

    return (
      <form
        className="login__form form"
        action="#"
        method="post"
        onSubmit={this._handleSubmit}
      >
        <fieldset
          disabled={isDisabled}
          style={{border: `none`, padding: `0`}}
        >
          <LoginInputWrapped
            name={`email`}
            ref={this.loginRef}
          />
          <LoginInputWrapped
            name={`password`}
            ref={this.passRef}
          />
          <SubmitButton
            prefix="login"
            isDisabled={isDisabled}
          />
        </fieldset>
      </form>
    );
  }
}

export default LoginForm;
