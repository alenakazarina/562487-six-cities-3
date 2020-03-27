import * as React from 'react';
import {AuthData} from '../../types';
import LoginInput from '../login-input/login-input';
import SubmitButton from '../submit-button/submit-button';

interface Props {
  userLogin: string;
  userPassword: string;
  errorStatus: number;
  isDisabled: boolean;
  onChange: (evt: React.ChangeEvent) => void;
  setDisabled: (status: boolean) => void;
  login: (authData: AuthData) => void;
}

class LoginForm extends React.PureComponent<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidUpdate({errorStatus}) {
    if (errorStatus) {
      this.props.setDisabled(false);
    }
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    const {userLogin, userPassword, setDisabled} = this.props;
    setDisabled(true);
    this.props.login({
      login: userLogin,
      password: userPassword
    });
  }

  render() {
    const {
      userLogin,
      userPassword,
      isDisabled,
      onChange
    } = this.props;

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
          <LoginInput
            name={`email`}
            value={userLogin}
            onChange={onChange}
          />
          <LoginInput
            name={`password`}
            value={userPassword}
            onChange={onChange}
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
